/*クイズ、答え、解答の定義*/
const quiz = [
  {
   question:  '次の中で果物はどれ？',
   answers: [
    'いちご',
    'メロン',
    'りんご',
    'スイカ'
  ],
   correct: 'りんご'
  },{
   question:  '日本で一番広い県は？',
   answers: [
    '北海道',
    '岩手県',
    '長野県',
    '兵庫県'
  ],
   correct: '岩手県'
  },{
   question:  '次の内、県名と県庁所在地名が同じでないもの県はどれ？',
   answers: [
    '富山県',
    '北海道',
    '香川県',
    '福岡県'
  ],
   correct: '香川県'
  },{
   question:  '次の中で一番古い出来事はどれ？',
   answers: [
    '大化の改新',
    '白村江の戦い',
    '長篠の戦い',
    '壬申の乱'
  ],
   correct: '白村江の戦い'
  }
];
//クイズが何問あるか
const quizLength = quiz.length;
//クイズが何問目か
let quizIndex = 0;
//何問正解したか
let score = 0;
//ボタンの名前が定義したものになるようにする
const $button = document.getElementsByTagName('button');
//ボタンが何個あるか
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent= quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
  }
}

setupQuiz();
//クリックしたら正誤判定
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    //正解だったらスコアを増やす
    score++;
  } else {
    window.alert('不正解！');
  }
//次のクイズに移る
quizIndex++;

if(quizIndex < quizLength) {
  //クイズが残っていれば
  setupQuiz();
}else {
  //クイズがもうなければ、スコアを表示
  window.alert('終了！　あなたのスコアは'+score+'/'+quizLength+'です！');
  location.href = "file:///Users/masakiten/Desktop/quiz/index.html";
}
}
//それぞれのボタンの正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click' ,  (e)=> {
    clickHandler(e);
  });
  handleIndex++;
}
