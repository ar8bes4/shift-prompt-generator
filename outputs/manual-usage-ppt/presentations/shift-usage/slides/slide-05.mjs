import { addFooter, addTableRow, baseSlide, colors } from "./slide-utils.mjs";

export async function slide05(presentation, ctx) {
  const slide = baseSlide(presentation, ctx, "納品形式", "完成品は表形式のテキストで納品");
  addTableRow(slide, ctx, 96, 230, "納品物", "日付、曜日、担当者、付記が分かる当直表。", { h: 58 });
  addTableRow(slide, ctx, 96, 288, "形式", "Markdownなどの表形式テキストをそのまま提出すれば問題ありません。", { h: 58 });
  addTableRow(slide, ctx, 96, 346, "確認ポイント", "不可日の割当がないこと、休日・平日のルールが守られていること、担当の偏りが大きすぎないこと。", { h: 72 });
  addTableRow(slide, ctx, 96, 418, "補足", "AIの出力は最終決定ではなく、担当者が確認してから共有します。", { h: 58 });
  ctx.addShape(slide, { x: 96, y: 516, w: 998, h: 96, fill: colors.dark, line: ctx.line(colors.dark, 0) });
  ctx.addText(slide, {
    x: 120,
    y: 532,
    w: 940,
    h: 68,
    text: "納品イメージ:\n| 日付 | 曜日 | 担当者 | 付記 |\n| 5/7 | 水 | 山田 |  |  /  | 5/8 | 木 | 佐藤 | ICU当直あり |",
    fontSize: 16,
    color: colors.white,
    typeface: ctx.fonts.mono,
  });
  addFooter(slide, ctx, "5 / 5");
  return slide;
}
