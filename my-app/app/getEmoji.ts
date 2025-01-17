export default function getEmoji(text: string) {
  switch (text) {
    case "실종":
      return "/missing.svg";

    case "호우":
      return "/rain.svg";

    case "지진":
      return "/earthquake.svg";

    case "화재":
      return "/fire.svg";

    case "교통사고":
      return "/carCrash.svg";

    case "교통":
      return "/traffic.svg";

    case "낙뢰":
      return "/thunder.svg";
    case "산사태":
      return "/landslide.svg";

    case "폭염":
      return "/temp.svg";

    case "단수":
      return "/waterSlash.svg";
    case "가스":
    case "유해화학물질 유출사고":
      return "/gasMask.svg";

    case "방사능재난":
      return "/nuclear.svg";

    default:
      return "/caution.svg";
  }
}
