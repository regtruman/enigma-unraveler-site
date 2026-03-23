import pianoRobot1 from "@/assets/piano-robot-1.jpg";
import pianoRobot2 from "@/assets/piano-robot-2.jpg";
import pianoRobot3 from "@/assets/piano-robot-3.jpg";
import triumph1 from "@/assets/triumph-1.jpg";
import triumph2 from "@/assets/triumph-2.jpg";
import triumph3 from "@/assets/triumph-3.jpg";
import canbus1 from "@/assets/canbus-1.jpg";
import canbus2 from "@/assets/canbus-2.jpg";
import pressureTaps1 from "@/assets/pressure-taps-1.jpg";

export interface Project {
  slug: string;
  title: string;
  org: string;
  date: string;
  description: string;
  details: string[];
  tags: string[];
  images: string[];
  longDescription?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    slug: "piano-playing-robot",
    title: "Piano Playing Robot — Motherboard & Daughterboard",
    org: "University of British Columbia",
    date: "Jan 2026",
    description:
      "Designed the embedded subsystems for a 6-person team's piano-playing robot, controlling finger actuators and coordinating hand movement.",
    details: [
      "Two four-layer PCBs in Altium Designer — motherboard operates two 350W motors with PID control and coordinates daughterboards",
      "SPI with shift registers, H-bridges with bootstrap circuits, galvanic isolation, and SD card storage",
      "Designed for both Raspberry Pi Pico and custom STM32 PCB with header pin attachment",
      "Connectors for magnetic encoders, limit switches, and additional UART/I2C expansion",
    ],
    tags: ["Altium Designer", "C", "STM32", "PCB Design", "SPI", "PID Control"],
    images: [pianoRobot1, pianoRobot2, pianoRobot3],
    longDescription:
      "As part of a 6-person team, we designed a robot capable of playing the piano. I designed the embedded subsystems controlling the robot's fingers and coordinating the hands. The project involved two major PCB revisions and a daughterboard system.",
    features: [
      "Motherboard Rev1 with 2 PID controlled 24V DC motor outputs, SD card, limit switches, UART communication, and SPI ports to daughterboards",
      "Motherboard Rev2 with LCD, 6 button keypad, SD card, limit switches, and daughterboard ports",
      "Daughterboard with 8 custom 12V solenoid drivers for each finger and SPI shift register communication",
      "24V BLDC motor driver board with field oriented control and UART communication",
      "Raspberry Pi Pico 2 for each board",
    ],
  },
  {
    slug: "triumph-street-triple",
    title: "Powertrain Electrical Integration — Triumph Street Triple",
    org: "Formula UBC SAE Racing",
    date: "Sept 2025",
    description:
      "Leading the electrical integration for a 675cc Triumph Street Triple engine swap, designing all harnesses and assisting PCB design.",
    details: [
      "Writing firmware in C, selecting sensors and electrical componentry, designing wiring harnesses",
      "STM32 power distribution CAN PCB, analog brake system plausibility device PCB, and Haltech Elite 1500 ECU",
      "Integrates drive-by-wire, traction control, launch control, and shifting in FSAE compliance",
    ],
    tags: ["C", "STM32", "CAN Bus", "Haltech ECU", "Rapid Harness"],
    images: [triumph1, triumph2, triumph3],
    longDescription:
      "For the UBC Formula SAE Racing 2026 car, we changed engines to a 2013 675cc Triumph Street Triple. I designed all the wiring harnesses, specced the componentry, and assisted in designing the necessary PCBs to run this engine with drive-by-wire functionality.",
    features: [
      "12V analog brake system plausibility device that monitors throttle and brake sensors for safety and FSAE rule compliance",
      "Cockpit harness, front harness, engine harness, and sensor harness with Haltech Elite ECU and AIM data logger",
      "STM32 CANBus power distribution PCB and dashboard PCB",
    ],
  },
  {
    slug: "fpga-rc4-code-breaker",
    title: "FPGA Multicore RC4 Code Breaker",
    org: "University of British Columbia",
    date: "Nov 2025",
    description:
      "Designed and tested an FPGA multicore code breaker that deciphers ARC4 encrypted messages and returns its encryption key.",
    details: [
      "Five single port embedded memory blocks with two parallel processing cores",
      "Initialization and decryption modules controlled by finite state machine",
      "User controls via onboard HEX display and buttons on Intel DE1-SoC (Cyclone V)",
      "Testbenches in ModelSim for verification, synthesized using Intel Quartus Prime",
    ],
    tags: ["SystemVerilog", "FPGA", "Quartus Prime", "ModelSim", "Cryptography"],
    images: [],
    longDescription:
      "This project involved designing a multicore cryptographic processor on an FPGA that brute-forces ARC4 encryption keys. The architecture uses parallel processing cores to speed up the key search space, with shared memory blocks for coordination.",
  },
  {
    slug: "fpga-risc-machine",
    title: "FPGA RISC Machine",
    org: "University of British Columbia",
    date: "Sept 2024",
    description:
      "Designed and tested an FPGA processor executing basic ARMv7 operations with a 16-bit datapath.",
    details: [
      "8 general purpose registers, pipeline registers, FSM controller, ALU with overflow detection",
      "Shifter module, program counter, instruction register, and instruction encoders/decoders",
      "Text file read/write memory and memory mapped I/O via switches and LEDs",
      "Testbenches in ModelSim, synthesized on Intel DE1-SoC (Cyclone V)",
    ],
    tags: ["SystemVerilog", "FPGA", "ARM", "Quartus Prime", "ModelSim"],
    images: [],
    longDescription:
      "A fully functional RISC processor designed in SystemVerilog, capable of executing a subset of ARMv7 instructions. The 16-bit datapath includes all essential components of a modern processor pipeline.",
  },
  {
    slug: "canbus-sensor-interface",
    title: "CANBus Sensor Interface Unit",
    org: "Formula UBC SAE Racing",
    date: "Jan 2025",
    description:
      "Assisted firmware and hardware development for a four-layer STM32-based CAN bus PCB extending sensor support to the vehicle's ECU and datalogger.",
    details: [
      "12V to 5V buck converter for sensors, 5V to 3.3V LDO for STM32, with overcurrent protection",
      "Firmware in C processes 6 analog and 2 digital speed values, sending CAN frames",
      "Differential pairs, impedance matching, and filtering for signal integrity",
    ],
    tags: ["C", "STM32", "CAN Bus", "Altium Designer", "PCB Design"],
    images: [canbus1, canbus2],
    longDescription:
      "During my first year on Formula UBC, I assisted in the hardware design and firmware development of a PCB that supplies power to, and measures both analog and digital sensors. These are forwarded over the vehicle CANBus to our ECU and data logger.",
    features: [
      "12V to 5V buck converter for sensor supply and 5V to 3.3V LDO for onboard STM32",
      "Overcurrent protection",
      "USB C connection for flashing or future additions",
      "Impedance matching and filtering to improve signal integrity",
    ],
  },
  {
    slug: "pressure-taps-pcb",
    title: "Aerodynamic Pressure Taps PCB",
    org: "Formula UBC SAE Racing",
    date: "2024",
    description:
      "Designed a PCB that fits inside airfoils to measure pressure values above and below, validating aerodynamics simulations.",
    details: [
      "16 pressure transducers with offset adjustments and amplification via op-amp configurations",
      "Analog values read by Arduino Mega 2560, sent over USB to Python visualization script",
      "Python plot displays live pressure data with value averaging and spreadsheet reports",
    ],
    tags: ["Arduino", "Python", "Op-Amps", "Analog Design", "PCB Design"],
    images: [pressureTaps1],
    longDescription:
      "My first PCB project was designing a board that fits inside airfoils and can measure pressure values both above and below. This allows the aerodynamics team to validate their designs and simulations. It was designed for tubing that routes to each port on the board during the airfoil manufacturing stage.",
    features: [
      "16 pressure transducers with offset adjustments and amplification with various op-amp configurations",
      "Analog values are read by an Arduino Mega 2560 and sent through USB to a Python computer script",
      "Python plot displays live pressure data with value averaging and a spreadsheet report",
    ],
  },
];
