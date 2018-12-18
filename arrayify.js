const arrayifyMixi : {
  arrayify: (i18nArray) => {
    return Object.keys.(i18nArray).map((item) => i18nArray[item]);
  }
}
