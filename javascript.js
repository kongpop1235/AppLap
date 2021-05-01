function handleClass(node, className, action = "add") {
    node.classList[action](className);
  }
  
  function handleTogglingLayer(togglingLayer) {
    const cords = this.getBoundingClientRect();
    const { width, height } = cords;
    const offsetFromLeft = this.offsetLeft;
  
    togglingLayer.style.width = width + "px";
    togglingLayer.style.height = height + "px";
    togglingLayer.style.left = offsetFromLeft + "px";
  }
  
  const toggleButtons = document.querySelectorAll(".btn-toggle-js");
  
  toggleButtons.forEach((toggleBtn) => {
    const toggleTriggeringElements = toggleBtn.querySelectorAll("span");
    const togglingLayer = toggleBtn.querySelector(".toggling-layer");
  
    const initiallyActiveElm =
      toggleBtn.querySelector(".toggle-active") || toggleTriggeringElements[0];
  
    toggleTriggeringElements.forEach((toggleTriggeringElement) => {
      toggleTriggeringElement.addEventListener("click", function () {
        handleAction(this);
      });
    });
  
    function handleAction(el) {
      toggleTriggeringElements.forEach((toggleTriggeringElement) =>
        handleClass(toggleTriggeringElement, "toggle-active", "remove")
      );
  
      handleClass(el, "toggle-active");
      handleTogglingLayer.call(el, togglingLayer);
  
      // your different required action for the elements here
  
      if (el.dataset.actionType === "more") {
        // action when clicking on more
        console.log("more");
      } else {
        // action when clicking on less
        console.log("less");
      }
    }
  
    //    when initially loading
    handleAction(initiallyActiveElm);
  });
  
  
  function test1() {
    document.getElementById("p1").innerHTML = "10";
    document.getElementById("p2").innerHTML = "15";
  }
  
  function test2() {
    document.getElementById("p1").innerHTML = "12";
    document.getElementById("p2").innerHTML = "17";
  }

  //--------------navbar scroll-------------------------------------------------------------------
  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 30) {
      $("#nav").addClass("nav-scroll")
    } 
    else {
      $("#nav").removeClass("nav-scroll")
    }
  });