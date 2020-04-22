const formatDate = (date: string): string =>
  Intl.DateTimeFormat('pt-BR').format(Date.parse(date));

export default formatDate;
