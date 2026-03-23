import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { ProjectCard } from "./ProjectCard";

import pianoRobot1 from "@/assets/piano-robot-1.jpg";
import pianoRobot2 from "@/assets/piano-robot-2.jpg";
import pianoRobot3 from "@/assets/piano-robot-3.jpg";
import triumph1 from "@/assets/triumph-1.jpg";
import triumph2 from "@/assets/triumph-2.jpg";
import triumph3 from "@/assets/triumph-3.jpg";
import canbus1 from "@/assets/canbus-1.jpg";
import canbus2 from "@/assets/canbus-2.jpg";
import pressureTaps1 from "@/assets/pressure-taps-1.jpg";

const projects = [
  {
    title: "Piano Playing Robot — Motherboard & Daughterboard",
    org: "University of British Columbia",
    date: "Jan 2026",
    description: "Designed the embedded subsystems for a 6-person team's piano-playing robot, controlling finger actuators and coordinating hand movement.",
    details: [
      "Two four-layer PCBs in Altium Designer — motherboard operates two 350W motors with PID control and coordinates daughterboards",
      "SPI with shift registers, H-bridges with bootstrap circuits, galvanic isolation, and SD card storage",
      "Designed for both Raspberry Pi Pico and custom STM32 PCB with header pin attachment",
      "Connectors for magnetic encoders, limit switches, and additional UART/I2C expansion",
    ],
    tags: ["Altium Designer", "C", "STM32", "PCB Design", "SPI", "PID Control"],
    images: [pianoRobot1, pianoRobot2, pianoRobot3],
  },
  {
    title: "Powertrain Electrical Integration — Triumph Street Triple",
    org: "Formula UBC SAE Racing",
    date: "Sept 2025",
    description: "Leading the electrical integration for a 675cc Triumph Street Triple engine swap, designing all harnesses and assisting PCB design.",
    details: [
      "Writing firmware in C, selecting sensors and electrical componentry, designing wiring harnesses",
      "STM32 power distribution CAN PCB, analog brake system plausibility device PCB, and Haltech Elite 1500 ECU",
      "Integrates drive-by-wire, traction control, launch control, and shifting in FSAE compliance",
    ],
    tags: ["C", "STM32", "CAN Bus", "Haltech ECU", "Rapid Harness"],
    images: [triumph1, triumph2, triumph3],
  },
  {
    title: "FPGA Multicore RC4 Code Breaker",
    org: "University of British Columbia",
    date: "Nov 2025",
    description: "Designed and tested an FPGA multicore code breaker that deciphers ARC4 encrypted messages and returns its encryption key.",
    details: [
      "Five single port embedded memory blocks with two parallel processing cores",
      "Initialization and decryption modules controlled by finite state machine",
      "User controls via onboard HEX display and buttons on Intel DE1-SoC (Cyclone V)",
      "Testbenches in ModelSim for verification, synthesized using Intel Quartus Prime",
    ],
    tags: ["SystemVerilog", "FPGA", "Quartus Prime", "ModelSim", "Cryptography"],
    images: [],
  },
  {
    title: "FPGA RISC Machine",
    org: "University of British Columbia",
    date: "Sept 2024",
    description: "Designed and tested an FPGA processor executing basic ARMv7 operations with a 16-bit datapath.",
    details: [
      "8 general purpose registers, pipeline registers, FSM controller, ALU with overflow detection",
      "Shifter module, program counter, instruction register, and instruction encoders/decoders",
      "Text file read/write memory and memory mapped I/O via switches and LEDs",
      "Testbenches in ModelSim, synthesized on Intel DE1-SoC (Cyclone V)",
    ],
    tags: ["SystemVerilog", "FPGA", "ARM", "Quartus Prime", "ModelSim"],
    images: [],
  },
  {
    title: "CANBus Sensor Interface Unit",
    org: "Formula UBC SAE Racing",
    date: "Jan 2025",
    description: "Assisted firmware and hardware development for a four-layer STM32-based CAN bus PCB extending sensor support to the vehicle's ECU and datalogger.",
    details: [
      "12V to 5V buck converter for sensors, 5V to 3.3V LDO for STM32, with overcurrent protection",
      "Firmware in C processes 6 analog and 2 digital speed values, sending CAN frames",
      "Differential pairs, impedance matching, and filtering for signal integrity",
    ],
    tags: ["C", "STM32", "CAN Bus", "Altium Designer", "PCB Design"],
    images: [canbus1, canbus2],
  },
  {
    title: "Aerodynamic Pressure Taps PCB",
    org: "Formula UBC SAE Racing",
    date: "2024",
    description: "Designed a PCB that fits inside airfoils to measure pressure values above and below, validating aerodynamics simulations.",
    details: [
      "16 pressure transducers with offset adjustments and amplification via op-amp configurations",
      "Analog values read by Arduino Mega 2560, sent over USB to Python visualization script",
      "Python plot displays live pressure data with value averaging and spreadsheet reports",
    ],
    tags: ["Arduino", "Python", "Op-Amps", "Analog Design", "PCB Design"],
    images: [pressureTaps1],
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div ref={ref} className={`container mx-auto px-6 ${isVisible ? "animate-reveal" : "opacity-0"}`}>
        <SectionLabel>Projects</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-12 text-foreground">What I've Built</h2>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
