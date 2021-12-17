const { sumVersions, calculateValue } = require('./decodeBITS');

describe('sumVersions', () => {
  test('8A004A801A8002F478 => 16', () => {
    const data = '8A004A801A8002F478';
    expect(sumVersions(data)).toBe(16);
  });

  test('620080001611562C8802118E34 => 12', () => {
    const data = '620080001611562C8802118E34';
    expect(sumVersions(data)).toBe(12);
  });

  test('C0015000016115A2E0802F182340 => 23', () => {
    const data = 'C0015000016115A2E0802F182340';
    expect(sumVersions(data)).toBe(23);
  });

  test('A0016C880162017C3686B18A3D4780 => 31', () => {
    const data = 'A0016C880162017C3686B18A3D4780';
    expect(sumVersions(data)).toBe(31);
  });
});

describe('calculateValue', () => {
  test('C200B40A82 => 3', () => {
    const data = 'C200B40A82';
    expect(calculateValue(data)).toBe(3);
  });

  test('04005AC33890 => 54', () => {
    const data = '04005AC33890';
    expect(calculateValue(data)).toBe(54);
  });

  test('880086C3E88112 => 7', () => {
    const data = '880086C3E88112';
    expect(calculateValue(data)).toBe(7);
  });

  test('CE00C43D881120 => 9', () => {
    const data = 'CE00C43D881120';
    expect(calculateValue(data)).toBe(9);
  });
  test('D8005AC2A8F0 => 15', () => {
    const data = 'D8005AC2A8F0';
    expect(calculateValue(data)).toBe(1);
  });

  test('F600BC2D8F => 15', () => {
    const data = 'F600BC2D8F';
    expect(calculateValue(data)).toBe(0);
  });

  test('9C005AC2F8F0 => 15', () => {
    const data = '9C005AC2F8F0';
    expect(calculateValue(data)).toBe(0);
  });

  test('9C0141080250320F1802104A08 => 1', () => {
    const data = '9C0141080250320F1802104A08';
    expect(calculateValue(data)).toBe(1);
  });
});
