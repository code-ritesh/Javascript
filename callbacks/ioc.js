// --------------------------------------
// Example: Car and Engine
// --------------------------------------

// 1️⃣ Without IoC (Tightly Coupled)
class Engine {
  start() {
    console.log("Petrol engine started 🚗");
  }
}

class CarWithoutIoC {
  constructor() {
    // ❌ Car decides to always use Engine
    this.engine = new Engine();
  }

  drive() {
    this.engine.start();
    console.log("Car is driving...");
  }
}

console.log("---- Without IoC ----");
const normalCar = new CarWithoutIoC();
normalCar.drive();

// Problem: If we want an ElectricEngine, we must edit CarWithoutIoC code.
// This makes it tightly coupled and hard to extend.


// 2️⃣ With IoC (Dependency Injection → control inverted)
class ElectricEngine {
  start() {
    console.log("Electric engine started ⚡");
  }
}

class CarWithIoC {
  constructor(engine) {
    // ✅ Car gets engine from outside (injected)
    this.engine = engine;
  }

  drive() {
    this.engine.start();
    console.log("Car is driving...");
  }
}

console.log("\n---- With IoC ----");
// Now we can inject any type of engine without changing Car code
const petrolCar = new CarWithIoC(new Engine());
petrolCar.drive();

const tesla = new CarWithIoC(new ElectricEngine());
tesla.drive();

// ✅ IoC Advantage:
// Car does not control its dependency (Engine).
// We, the users, control what to pass.
// That is the "Inversion of Control".
