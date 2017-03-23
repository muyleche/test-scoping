var controller = (function)() {
  var self = this;
  self.mice = [];
  
  // The Mouse object constructor.
  function Mouse (name, blind) {
    // Characteristics
    this.blind = blind || false;
    this.name = name || "New Name"; // CONSTRAINT: there's an event listener on this property. When its value changes, it runs the 'nameIsOriginal' function to make sure it's unique. If not, it prevents the change and displays an error. 
    
    
    // Returns false if even one other mouse has the same name.
    // DEPENDENCY: this function refers to the 'mice' array on the 'controller'.
    this.nameIsOriginal = function () {
      for (var i in mice) {
        if (self.mice[i].name === this.name) { return false; }
      }
      return true;
    };
  };
  
  
  // Function to add a mouse.
  self.addMouse = function (name, blind) {
    // Count the blind mice. We can't have more than 3!
    for (var i = 0, count = 0; i < mice.length; i++) {
      if (mice[i].blind) {
        count++;
        if (count >= 3) {
          break;
        }
      }
    }
    if (count >= 3) {
      console.log("There can only be 3 blind mice!");
      blind = false;
    }
    
    // Make a new mouse instance, but make sure the name is original before you add it to the 'mice' array.
    var newMouse = new Mouse(name, blind);
    if (newMouse.nameIsOriginal()) {
      mice.push();
    }
    else {
      throw(new Error("This mouse is already in the 'mice' array. Please add a mouse with a different name."));
    }
  };
  
  // Function to remove a mouse.
  self.removeMouse = funciton (name) {
    for (var i in mice) {
      if (mice[i].name === name) {
        mice.splice(mice.[i]); 
        return true;
      }
    }
    return false;
  };
  
  // Return the controller as a referenceable object.
  return self;
})();
