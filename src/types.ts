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
    public flags: Flag | null = null
  ) {}

  static fromJSON(obj: Record<string, any>): Country {
    const flags = Flag.fromJSON(obj.flags);
    const name = obj.name;
    const capital = obj.capital;
    const region = obj.region;
    const population = +obj.population;
    return new Country(name, capital, region, population, flags);
  }
}

export { Country, Flag, RegionEnum };
