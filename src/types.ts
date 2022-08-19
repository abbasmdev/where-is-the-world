class Flag {
  constructor(public svg = "", public png = "") {}

  static fromJSON(obj: Record<string, any>) {
    return new Flag(obj.svg, obj.png);
  }
}

class Currency {
  constructor(public code = "", public name = "", public symbol = "") {}

  static fromJSON(obj: Record<string, any>) {
    return new Currency(obj.code, obj.name, obj.symbol);
  }
}

class Language {
  constructor(
    public iso639_1 = "",
    public iso639_2 = "",
    public name = "",
    public nativeName = ""
  ) {}

  static fromJSON(obj: Record<string, any>) {
    return new Language(obj.iso639_1, obj.iso639_2, obj.name, obj.nativeName);
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
    public topLevelDomain: string[] = [],
    public currencies: Currency[] = [],
    public languages: Language[] = [],
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
    const topLevelDomain = obj.topLevelDomain;
    const currencies =
      obj?.currencies?.map((item: Record<string, any>) =>
        Currency.fromJSON(item)
      ) || [];

    const languages =
      obj?.languages?.map((item: Record<string, any>) =>
        Language.fromJSON(item)
      ) || [];

    return new Country(
      name,
      capital,
      region,
      population,
      nativeName,
      subregion,
      alpha2Code,
      borders,
      topLevelDomain,
      currencies,
      languages,
      flags
    );
  }
}

export { Country, Flag, Currency };
