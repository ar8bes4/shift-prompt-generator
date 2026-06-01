import { addCard, addFooter, baseSlide, colors } from "./slide-utils.mjs";

export async function slide02(presentation, ctx) {
  const slide = baseSlide(presentation, ctx, "全体像", "このツールで行うこと");
  addCard(slide, ctx, 96, 238, 480, 130, "希望を整理する", "各メンバーの不可日、希望日、避けたい日などを入力します。自然な書き方のメモでも扱えます。");
  addCard(slide, ctx, 614, 238, 480, 130, "作成期間を指定する", "年・月、または「5/7-5/31」のような自由入力で、当直表の対象期間を指定します。");
  addCard(slide, ctx, 96, 392, 480, 130, "ルールを確認する", "平日・休日の扱い、当直間隔、スキルバランスなど、当直表作成時のルールを入力・調整します。");
  addCard(slide, ctx, 614, 392, 480, 130, "プロンプトをコピーする", "生成されたプロンプトをコピーし、GeminiなどのAIに貼り付けて当直表を作成します。");
  ctx.addShape(slide, { x: 96, y: 558, w: 998, h: 58, fill: colors.notice, line: ctx.line("#f2d98b", 1) });
  ctx.addText(slide, {
    x: 122,
    y: 570,
    w: 940,
    h: 34,
    text: "処理はブラウザ内で完結します。入力内容を外部サーバーへ送信する仕組みではありません。",
    fontSize: 20,
    color: colors.ink,
    bold: true,
    valign: "middle",
  });
  addFooter(slide, ctx, "2 / 5");
  return slide;
}
