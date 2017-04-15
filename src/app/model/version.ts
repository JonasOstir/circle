export class Version {

  public static fromString(version: string): Version {
    let versionParts: Array<string> = version.split('.');
    let major: number = Version.parseNumber(versionParts[0]);
    let minor: number = Version.parseNumber(versionParts[1]);
    let patch: number = Version.parseNumber(versionParts[2]);
    return new Version(major, minor, patch);
  }

  private static parseNumber(numberString: string): number {
    let number: number = parseInt(numberString, 10);
    if (isNaN(number) || number == null) {
      return 0;
    } else {
      return number;
    }
  }

  constructor(private major: number, private minor: number, private patch: number) {}

  public compareVersions(otherVersion: Version): number {
    if (otherVersion.major === this.major) {
      if (otherVersion.minor === this.minor) {
        return otherVersion.patch - this.patch;
      } else {
        return otherVersion.minor - this.minor;
      }
    } else {
      return otherVersion.major - this.major;
    }
  }

  public isGreaterOrEqualThen(otherVersion: Version): boolean {
    return this.compareVersions(otherVersion) <= 0;
  }

  public isGreaterThen(otherVersion: Version): boolean {
    return this.compareVersions(otherVersion) < 0;
  }

}
