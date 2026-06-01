import { addFooter, addStep, baseSlide } from "./slide-utils.mjs";

export async function slide04(presentation, ctx) {
  const slide = baseSlide(presentation, ctx, "作成担当者の操作", "ツールでの作業手順");
  addStep(slide, ctx, 1, 110, 238, 980, "GitHub PagesのURLを開く", "ブラウザでツールURLを開きます。インストールは不要です。");
  addStep(slide, ctx, 2, 110, 328, 980, "作成対象期間を指定する", "年・月を選ぶか、自由入力欄に対象期間を入力します。");
  addStep(slide, ctx, 3, 110, 418, 980, "各メンバーの希望を入力する", "氏名と希望内容を入力します。不可日や希望日が分かるように貼り付けます。");
  addStep(slide, ctx, 4, 110, 508, 980, "生成されたプロンプトをコピーする", "右側に表示されるプロンプトをコピーし、AIに貼り付けて当直表作成を依頼します。");
  addFooter(slide, ctx, "4 / 5");
  return slide;
}
