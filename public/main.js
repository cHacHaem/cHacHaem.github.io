/* global io */
/* global eruda */
/* global THREE */
/* global ml5 */
/* global AFRAME */
/*
pvp game
tag game
parcour game
capture the flag with power ups
casino game
in game currency s coins that are green
item shop
*/
import { ConvexGeometry } from "three/addons/geometries/ConvexGeometry.js";
$(function () {
  var socket = io();
  let players = {};
  AFRAME.registerComponent("draw", {
    init: function () {
      this.isDrawing = false;
      this.texture = null;
      let canvas;
      if (this.el.id != "player")
        canvas = playerElements[this.el.id + "-canvas"];
      if (this.el.id === "player")
        canvas = document.getElementById("my-canvas");
      this.el.addEventListener("loaded", (e) => {
        let mesh = this.el.getObject3D("mesh");
        this.texture = new THREE.CanvasTexture(canvas);
        let textureToBeRemoved = mesh.material.map;
        mesh.material.map = this.texture;
        if (textureToBeRemoved) textureToBeRemoved.dispose();
      });
    },
    tick: function () {
      if (this.texture) this.texture.needsUpdate = true;
    },
  });
  let chatOpen = true;
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "c") {
      if (chatOpen) {
        chatOpen = false;
      } else {
        chatOpen = true;
      }
      if (chatOpen) {
        document.getElementById("chatBox").setAttribute("class", "chatInput");
        document
          .getElementById("chatDiv")
          .setAttribute("class", "chatMessages");
      } else {
        document.getElementById("chatBox").setAttribute("class", "kchjwbj");
        document
          .getElementById("chatDiv")
          .setAttribute("class", "gejhkhjwegjf");
      }
    }
    if (evt.key === "Enter") {
      socket.emit("chat message", {
        sentBy: playerId,
        message: document.getElementById("chatBox").value,
      });
      handleMessage({
        sentBy: playerId,
        message: document.getElementById("chatBox").value,
      });
      document.getElementById("chatBox").value = "";
    }
  });
  socket.on("chat message", function (data2) {
    handleMessage(data2);
  });
  function handleMessage(messageData) {
    let newMessageText = document.createElement("h6");
    let newMessageDiv = document.createElement("div");
    newMessageText.innerHTML = messageData.message;
    newMessageDiv.setAttribute("class", "sent_to");
    newMessageDiv.appendChild(newMessageText);
    document.getElementById("chatDiv").appendChild(newMessageDiv);
  }
  let boxPre;
  let timer = -1;
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/eruda";
  document.body.appendChild(script);
  script.onload = function () {
    eruda.init();
  };
  let faceapi;
  const webcam = document.getElementById("webcam");

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        webcam.srcObject = stream;
        const detectionOptions = {
          withLandmarks: true,
          withDescriptors: false,
        };
        faceapi = ml5.faceApi(webcam, detectionOptions, modelReady);
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });
  } else {
    console.error("getUserMedia not supported in this browser.");
  }
  function modelReady() {
    console.log("Model ready!");

    faceapi.detect(gotResults);

    setInterval(() => {
      let canvas = document.getElementById("my-canvas");
      let ctx = canvas.getContext("2d");
      let vid = document.getElementById("webcam");
      timer++;
      if (timer > 500 || timer == -1) {
        faceapi.detect(gotResults);
        timer = 0;
      }
      vid.play();
      ctx.drawImage(
        vid,
        boxPre._x - 20,
        boxPre._y - 200,
        boxPre._width + 300,
        boxPre._height + 100,
        0,
        0,
        640,
        640
      );
    }, 60 / 1000);
  }

  function gotResults(err, result) {
    if (result) {
      boxPre = result[0].alignedRect._box;
    }
  }
  function randomString(length) {
    var chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");

    if (!length) {
      length = Math.floor(Math.random() * chars.length);
    }
    var str = "";
    for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }
  let playerId = randomString(10);
  let player = document.getElementById("player");
  let playerElements = {};
  setInterval(() => {
    socket.emit("player update", {
      position: player.getAttribute("position"),
      id: playerId,
      video: document.getElementById("my-canvas").toDataURL("image/jpeg", 0.6),
    });
  }, 200 / 1000);
  socket.on("player update", function (stufff) {
    if (playerElements[stufff.id] === undefined) {
      let newPlayerElement = document.createElement("a-sphere");
      let newPlayerCanvas = document.createElement("canvas");
      newPlayerElement.innerHTML =
        "<a-gltf-model src='https://cdn.glitch.global/5d13bbfe-e20d-4c1a-bf02-79e4ee8de62c/sweater.glb?v=1713021429219' position='0 0 -0.5' scale='2 2 2' ></a-gltf-model>";
      newPlayerCanvas.setAttribute("style", "border-style: solid;");
      newPlayerCanvas.setAttribute("crossorigin", "anonymous");
      newPlayerCanvas.setAttribute("width", "640px");
      newPlayerCanvas.setAttribute("height", "640px");
      document.querySelector("body").appendChild(newPlayerCanvas);
      playerElements[stufff.id + "-canvas"] = newPlayerCanvas;
      playerElements[stufff.id] = newPlayerElement;
      newPlayerElement.setAttribute("id", stufff.id);
      newPlayerElement.setAttribute("scale", { x: 0.8, y: 1, z: 0.5 });
      newPlayerElement.setAttribute("draw", "");
      document.querySelector("a-scene").appendChild(newPlayerElement)
      players[stufff.id] = {position: new THREE.Vector3(0, 0, 0)}
    } 
    console.log(stufff)
    players[stufff.id].position = stufff.position
    playerElements[stufff.id].setAttribute("position", players[stufff.id].position)
        var img = new Image();
        img.onload = start;
        img.src = players[stufff.id].video;
        function start() {
          playerElements[stufff.id + "-canvas"].getContext("2d").drawImage(img, 0, 0);
          console.log(img)
        }
  });
});
