import { Version } from './version';

let versionString: string;
let testVersion: string = '5.jonas.test.5';

describe('Version @unit', () => {
  let version: Version;
  let major: number = 5;
  let minor: number = 6;
  let patch: number = 1;
  versionString = 'version ' + String(major) + '.' + String(minor) + '.' + String(patch);

  beforeEach(() => {
    version = new Version(major, minor, patch);
  });

  it('6.0.0 should be greater than ' + versionString, () => {
    let six: Version = new Version(6, 0, 0);
    expect(version.isGreaterOrEqualThen(six)).toBeFalsy();
  });

  it('99.99.99 should be greater then ' + versionString, () => {
    let nine: Version = new Version(99, 99, 99);
    expect(version.isGreaterThen(nine)).toBeFalsy();
  });

  it('should create an instance from string 5.99.0 and be greater than ' + versionString, () => {
    let stringVersion: Version = Version.fromString('5.99.0');
    expect(stringVersion).toBeDefined();
    expect(stringVersion.isGreaterThen(version)).toBeTruthy();
  });

  it('should parse ' + testVersion + ' correctly', () => {
    let parsed: Version = Version.fromString(testVersion);
    expect(parsed).toBeDefined();
    expect(parsed.isGreaterOrEqualThen(new Version(5, 0, 0))).toBeTruthy();
  });

  it('3.5.99 be smaller than ' + versionString, () => {
    let smaller: Version = new Version(3, 5, 99);
    expect(version.isGreaterOrEqualThen(smaller)).toBeTruthy();
  });

  it('5.6.1 should be equal to ' + versionString, () => {
    let equal: Version = new Version(5, 6, 1);
    expect(version.isGreaterOrEqualThen(equal)).toBeTruthy();
  });

});
