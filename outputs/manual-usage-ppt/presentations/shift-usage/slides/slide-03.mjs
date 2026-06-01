import { addFooter, addTableRow, baseSlide, colors } from "./slide-utils.mjs";

export async function slide03(presentation, ctx) {
  const slide = baseSlide(presentation, ctx, "メンバーへの案内", "希望聴取は当直発表後1週間を目処に回収");
  addTableRow(slide, ctx, 96, 230, "回収タイミング", "当直発表後、1週間を目処に各メンバーへ希望提出を依頼します。", { h: 58 });
  addTableRow(slide, ctx, 96, 288, "提出してほしい内容", "不可日、希望日、できれば避けたい日、連続勤務に関する希望、その他配慮が必要な予定。", { h: 72 });
  addTableRow(slide, ctx, 96, 360, "提出形式", "箇条書きやメモ形式で問題ありません。担当者がツールに貼り付けて整理します。", { h: 58 });
  addTableRow(slide, ctx, 96, 418, "注意点", "「絶対不可」と「できれば避けたい」は分けて書いてもらうと、後の調整がしやすくなります。", { h: 72 });
  ctx.addShape(slide, { x: 96, y: 520, w: 998, h: 90, fill: colors.dark, line: ctx.line(colors.dark, 0) });
  ctx.addText(slide, {
    x: 120,
    y: 536,
    w: 940,
    h: 58,
    text: "提出例:\n山田  - 不可: 5/2, 5/3, 5/10  - 希望: 5/15  - できれば避けたい: 5/20以降の連続当番",
    fontSize: 16,
    color: colors.white,
    typeface: ctx.fonts.mono,
  });
  addFooter(slide, ctx, "3 / 5");
  return slide;
}
