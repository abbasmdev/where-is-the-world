enum RegionEnum {
  "Africa" = "Africa",
  "America" = "America",
  "Asia" = "Asia",
  "Europe" = "Europe",
  "Oceania" = "Oceania",
}

class Flag {
  constructor(public svg = "", public png = "") {}

  static fromJSON(obj: Record<string, any>) {
    return new Flag(obj.svg, obj.png);
  }
}

class Country {
  constructor(
    public name = "",
    public capital = "",
    public region = "",
    public population = 0,
    public nativeName = "",
    public subregion = "",
    public alpha2Code = "",
    public borders: string[] = [],
    public flags: Flag | null = null
  ) {}

  static fromJSON(obj: Record<string, any>): Country {
    const flags = Flag.fromJSON(obj.flags);
    const name = obj.name;
    const capital = obj.capital;
    const region = obj.region;
    const population = +obj.population;
    const nativeName = obj.nativeName;
    const subregion = obj.subregion;
    const borders = obj.borders;
    const alpha2Code = obj.alpha2Code;
    return new Country(
      name,
      capital,
      region,
      population,
      nativeName,
      subregion,
      alpha2Code,
      borders,
      flags
    );
  }
}

export { Country, Flag, RegionEnum };
