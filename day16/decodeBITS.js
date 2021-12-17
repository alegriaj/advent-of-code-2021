function calculateValue(transmission) {
  const packet = decodeBITS(transmission);
  return calculatePacket(packet);
}

function calculatePacket(packet) {
  switch (packet.typeID) {
    case 0: // sum
      let sum = 0;
      for (subPacket of packet.subPackets) {
        sum += calculatePacket(subPacket);
      }
      return sum;
    case 1: // product
      let product = 1;
      for (subPacket of packet.subPackets) {
        product *= calculatePacket(subPacket);
      }
      return product;
    case 2: // min
      let min = Infinity;
      for (subPacket of packet.subPackets) {
        min = Math.min(min, calculatePacket(subPacket));
      }
      return min;
    case 3: // max
      let max = -Infinity;
      for (subPacket of packet.subPackets) {
        max = Math.max(max, calculatePacket(subPacket));
      }
      return max;

    case 4: // literal
      return packet.literal;
    case 5: // greater than
      return calculatePacket(packet.subPackets[0]) >
        calculatePacket(packet.subPackets[1])
        ? 1
        : 0;
    case 6: // less than
      return calculatePacket(packet.subPackets[0]) <
        calculatePacket(packet.subPackets[1])
        ? 1
        : 0;
    case 7: // equal to
      return calculatePacket(packet.subPackets[0]) ===
        calculatePacket(packet.subPackets[1])
        ? 1
        : 0;
  }
}

function sumVersions(transmission) {
  const packet = decodeBITS(transmission);

  return sumPacketVersion(packet);
}

function decodeBITS(transmission) {
  const bitString = convertHexToBits(transmission);

  const bitStack = bitString.split('').reverse();
  const packet = decodePacket(bitStack);

  return packet;
}

function sumPacketVersion(packet) {
  let versionSum = packet.version;
  for (subPacket of packet.subPackets) {
    versionSum += sumPacketVersion(subPacket);
  }
  return versionSum;
}

function decodePacket(bitStack) {
  const packet = {};
  packet.subPackets = [];
  packet.version = getVersion(bitStack);
  packet.typeID = getTypeID(bitStack);

  if (packet.typeID === 4) {
    // literal
    packet.literal = getLiteral(bitStack);
  } else {
    // operator
    packet.lengthTypeID = getNumber(bitStack, 1);
    if (packet.lengthTypeID === 0) {
      // 15 bit packet length
      packet.subPacketsBitLength = getNumber(bitStack, 15);
      const subPacketBitStack = bitStack.slice(-1 * packet.subPacketsBitLength);
      // just to pop the stack for what we just sliced off
      getNumber(bitStack, packet.subPacketsBitLength);
      while (subPacketBitStack.length > 6) {
        const subPacket = decodePacket(subPacketBitStack);
        packet.subPackets.push(subPacket);
      }
    } else {
      // 11 bit sub packet count
      const subPacketCount = getNumber(bitStack, 11);
      for (let i = 0; i < subPacketCount; i++) {
        const subPacket = decodePacket(bitStack);
        packet.subPackets.push(subPacket);
      }
    }
  }
  return packet;
}

function getLiteral(bitStack) {
  let binNumber = '';

  let prefix = 0;
  do {
    prefix = getNumber(bitStack, 1);
    binNumber += getBitString(bitStack, 4);
  } while (prefix === 1);

  return parseInt(binNumber, 2);
}

function getTypeID(bitStack) {
  return parseInt(getBitString(bitStack, 3), 2);
}

function getVersion(bitStack) {
  return parseInt(getBitString(bitStack, 3), 2);
}

function getNumber(bitStack, length) {
  return parseInt(getBitString(bitStack, length), 2);
}

function getBitString(bitStack, length) {
  let bitString = '';
  for (let i = 0; i < length; i++) {
    bitString += bitStack.pop();
  }
  return bitString;
}

function convertHexToBits(hexMessage) {
  let bitString = '';
  for (let hexLoc = 0; hexLoc < hexMessage.length; hexLoc++) {
    const bits = parseInt('0' + hexMessage[hexLoc], 16)
      .toString(2)
      .padStart(4, '0');
    bitString += bits;
  }
  return bitString;
}

// 110100101111111000101000
// VVVTTTAAAAABBBBBCCCCC

// The three bits labeled V (110) are the packet version, 6.
// The three bits labeled T (100) are the packet type ID, 4, which means the packet is a literal value.
// The five bits labeled A (10111) start with a 1 (not the last group, keep reading) and contain the first four bits of the number, 0111.
// The five bits labeled B (11110) start with a 1 (not the last group, keep reading) and contain four more bits of the number, 1110.
// The five bits labeled C (00101) start with a 0 (last group, end of packet) and contain the last four bits of the number, 0101.
// The three unlabeled 0 bits at the end are extra due to the hexadecimal representation and should be ignored.

// So, this packet represents a literal value with binary representation 011111100101, which is 2021 in decimal.

// Standard Header:
// typeID -
//    4 - literal value
//    all others - operator
//      lengthTypeID -
//        0 - next 15 bits = number total length of subpacket bits
//        1 - next 11 bits = number of sub-packets

// 00111000000000000110111101000101001010010001001000000000
// VVVTTTILLLLLLLLLLLLLLLAAAAAAAAAAABBBBBBBBBBBBBBBB

// The three bits labeled V (001) are the packet version, 1.
// The three bits labeled T (110) are the packet type ID, 6, which means the packet is an operator.
// The bit labeled I (0) is the length type ID, which indicates that the length is a 15-bit number representing the number of bits in the sub-packets.
// The 15 bits labeled L (000000000011011) contain the length of the sub-packets in bits, 27.
// The 11 bits labeled A contain the first sub-packet, a literal value representing the number 10.
// The 16 bits labeled B contain the second sub-packet, a literal value representing the number 20.

// Packets with type ID 0 are sum packets - their value is the sum of the values of their sub-packets. If they only have a single sub-packet, their value is the value of the sub-packet.
// Packets with type ID 1 are product packets - their value is the result of multiplying together the values of their sub-packets. If they only have a single sub-packet, their value is the value of the sub-packet.
// Packets with type ID 2 are minimum packets - their value is the minimum of the values of their sub-packets.
// Packets with type ID 3 are maximum packets - their value is the maximum of the values of their sub-packets.
// Packets with type ID 5 are greater than packets - their value is 1 if the value of the first sub-packet is greater than the value of the second sub-packet; otherwise, their value is 0. These packets always have exactly two sub-packets.
// Packets with type ID 6 are less than packets - their value is 1 if the value of the first sub-packet is less than the value of the second sub-packet; otherwise, their value is 0. These packets always have exactly two sub-packets.
// Packets with type ID 7 are equal to packets - their value is 1 if the value of the first sub-packet is equal to the value of the second sub-packet; otherwise, their value is 0. These packets always have exactly two sub-packets.

module.exports = { sumVersions, calculateValue };
