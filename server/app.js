const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname +"/../client"));

const data = [{'dictionary': '먹다', 'meaning': 'to eat','stem': '먹','present_base': '먹','past_base': '먹었','future_base' :'먹을','present': '먹어 ','past': '먹었어 '},
    {'dictionary': '마시다', 'meaning': 'to drink','stem': '마시','present_base': '마셔','past_base': '마셨','future_base' :'마실','present': '마셔 ','past': '마셨어 '},
    {'dictionary': '가다', 'meaning': 'to go','stem': '가','present_base': '가','past_base': '갔','future_base' :'갈','present': '가','past': '갔어'},
    {'dictionary': '오다', 'meaning': 'to come','stem': '오','present_base': '와','past_base': '왔','future_base' :'올','present': '와','past': '왔어'},
    {'dictionary': '열다 ', 'meaning': 'to open','stem': '열','present_base': '열','past_base': '열었','future_base' :'열','present': '열어 ','past': '열었어'},
    {'dictionary': '닫다', 'meaning': 'to close','stem': '닫','present_base': '닫','past_base': '닫았','future_base' :'닫을','present': '닫아','past': '닫았어'},
    {'dictionary': '요리하다', 'meaning': 'to cook','stem': '요리하','present_base': '요리해','past_base': '요리했','future_base' :'요리할','present': '요리해','past': '요리했어'},
    {'dictionary': '청소하다', 'meaning': 'to clean','stem': '청소하','present_base': '청소해','past_base': '청소했','future_base' :'청소할','present': '청소해','past': '청소했어 '},
    {'dictionary': '보다', 'meaning': 'to watch','stem': '보 ','present_base': '봐','past_base': '봤','future_base' :'볼','present': '봐','past': '봤어'},
    {'dictionary': '듣다', 'meaning': 'to hear','stem': '듣','present_base': '들','past_base': '들었','future_base' :'들을','present': '들어','past': '들었어'},
    {'dictionary': '사다', 'meaning': 'to buy','stem': '사','present_base': '사','past_base': '샀','future_base' :'살','present': '사','past': '샀어'},
    {'dictionary': '팔다', 'meaning': 'to sell','stem': '팔','present_base': '팔','past_base': '팔았','future_base' :'팔','present': '팔아','past': '팔았어'},
    {'dictionary': '하다', 'meaning': 'to do','stem': '하','present_base': '해','past_base': '했','future_base' :'할','present': '해','past': '했어'},
    {'dictionary': '말하다', 'meaning': 'to speak','stem': '말하','present_base': '말해 ','past_base': '말했','future_base' :'말할','present': '말해','past': '말했어'},
    {'dictionary': '주다', 'meaning': 'to give','stem': '주','present_base': '줘 ','past_base': '줬','future_base' :'줄','present': '줘','past': '줬어'},
    {'dictionary': '배우다', 'meaning': 'to learn','stem': '배우','present_base': '배워','past_base': '배웠','future_base' :'배울','present': '배워','past': '배웠어'},
    {'dictionary': '가르치다', 'meaning': 'to teach','stem': '가르치','present_base': '가르쳐','past_base': '가르쳤','future_base' :'가르칠','present': '가르쳐','past': '가르쳤어'},
    {'dictionary': '생각하다', 'meaning': 'to think','stem': '생각하','present_base': '생각해','past_base': '생각했','future_base' :'생각할','present': '생각해','past': '생각했어'},
    {'dictionary': '걷다', 'meaning': 'to walk','stem': '걷','present_base': '걷','past_base': '걷었','future_base' :'걷을','present': '걷어','past': '걷었어'},
    {'dictionary': '자다', 'meaning': 'to sleep','stem': '자','present_base': '자','past_base': '잤','future_base' :'잘','present': '자','past': '잤어'},
    {'dictionary': '쓰다', 'meaning': 'to write','stem': '쓰','present_base': '써','past_base': '썼','future_base' :'쓸','present': '써','past': '썼어'},
    {'dictionary': '읽다', 'meaning': 'to read','stem': '읽','present_base': '읽','past_base': '읽었','future_base' :'읽을','present': '읽어','past': '읽었어'},
    {'dictionary': '일어나다', 'meaning': 'to wake up','stem': '일어나','present_base': '일어나','past_base': '일어났','future_base' :'일어날 ','present': '일어나','past': '일어났어 '},
    {'dictionary': '체재하다', 'meaning': 'to stay','stem': '체재하','present_base': '체재해 ','past_base': '체재했','future_base' :'체재할','present': '체재해','past': '체재했어'},
    {'dictionary': '도착하다', 'meaning': 'to arrive','stem': '도착하 ','present_base': '도착해','past_base': '도착했','future_base' :'도착할','present': '도착해','past': '도착했어'},
    {'dictionary': '떠나다', 'meaning': 'to leave','stem': '떠나','present_base': '떠나 ','past_base': '떠났','future_base' :'떠날','present': '떠나','past': '떠났어'},
    {'dictionary': '입다', 'meaning': 'to wear','stem': '입','present_base': '입','past_base': '입었','future_base' :'입을 ','present': '입어','past': '입었어'},
    {'dictionary': '쓰다', 'meaning': 'to wear(hat)','stem': '쓰','present_base': '써 ','past_base': '썼','future_base' :'쓸','present': '써','past': '썼어'},
    {'dictionary': '신다', 'meaning': 'to wear(shoes)','stem': '신','present_base': '신','past_base': '신었','future_base' :'신을','present': '신어','past': '신었어'},
    {'dictionary': '찾다', 'meaning': 'to find','stem': '찾 ','present_base': '찾 ','past_base': '찾았','future_base' :'찾을','present': '찾아','past': '찾았어'},
    {'dictionary': '기다리다', 'meaning': 'to wait','stem': '기다리 ','present_base': '기다려 ','past_base': '기다렸','future_base' :'기다릴','present': '기다려','past': '기다렸어'},
    {'dictionary': '잡다', 'meaning': 'to catch','stem': '잡','present_base': '잡','past_base': '잡았','future_base' :'잡을','present': '잡아','past': '잡았어'},
    {'dictionary': '던지다', 'meaning': 'to throw','stem': '던지','present_base': '던져 ','past_base': '던졌','future_base' :'던질','present': '던져','past': '던졌어'},
    {'dictionary': '떨어지다', 'meaning': 'to drop','stem': '떨어지','present_base': '떨어져','past_base': '떨어졌 ','future_base' :'떨어질','present': '떨어져','past': '떨어졌어'},
    {'dictionary': '보내다', 'meaning': 'to send','stem': '보내','present_base': '보내','past_base': '보냈','future_base' :'보낼','present': '보내','past': '보냈어'},
    {'dictionary': '받다', 'meaning': 'to receive','stem': '받','present_base': '받','past_base': '받았','future_base' :'받을','present': '받아','past': '받았어'},
    {'dictionary': '도착하다', 'meaning': 'to arrive','stem': '도착하','present_base': '도착해','past_base': '도착했','future_base' :'도착할','present': '도착해','past': '도착했어'},
    {'dictionary': '떠나다', 'meaning': 'to leave','stem': '떠나','present_base': '떠나','past_base': '떠났','future_base' :'떠날','present': '떠나','past': '떠났어'},
    {'dictionary': '춤추다', 'meaning': 'to dance','stem': '춤추','present_base': '춤춰','past_base': '춤췄','future_base' :'춤출','present': '춤춰','past': '춤췄어'},
    {'dictionary': '달리다', 'meaning': 'to run','stem': '달리','present_base': '달려','past_base': '달렸','future_base' :'달릴','present': '달려','past': '달렸어'},
    {'dictionary': '넘어지다', 'meaning': 'to fall','stem': '넘어지','present_base': '넘어져','past_base': '넘어졌','future_base' :'넘어질','present': '넘어져','past': '넘어졌어'},
    {'dictionary': '수영하다', 'meaning': 'to swim','stem': '수영하','present_base': '수영해','past_base': '수영했','future_base' :'수영할','present': '수영해','past': '수영했어'},
    {'dictionary': '앉다', 'meaning': 'to sit','stem': '앉','present_base': '앉','past_base': '앉았','future_base' :'앉을','present': '앉아','past': '앉았어'},
    {'dictionary': '운전하다', 'meaning': 'to drive','stem': '운전하','present_base': '운전해','past_base': '운전했','future_base' :'운전할','present': '운전해','past': '운전했어'},
    {'dictionary': '들어오다', 'meaning': 'to enter','stem': '들어오','present_base': '들어와','past_base': '들어왔','future_base' :'들어올','present': '들어와','past': '들어왔어'},
    {'dictionary': '나가다', 'meaning': 'to exit','stem': '나가','present_base': '나가','past_base': '나갔','future_base' :'나갈','present': '나가','past': '나갔어'},
    {'dictionary': '웃다', 'meaning': 'to laugh','stem': '웃','present_base': '웃','past_base': '웃었','future_base' :'웃을','present': '웃어','past': '웃었어'},
    {'dictionary': '울다', 'meaning': 'to cry','stem': '울','present_base': '울','past_base': '울었','future_base' :'울','present': '울어','past': '울었어'},
    {'dictionary': '놀다', 'meaning': 'to play','stem': '놀','present_base': '놀','past_base': '놀았','future_base' :'놀','present': '놀아','past': '놀았어'},
    {'dictionary': '쉬다', 'meaning': 'to rest','stem': '쉬','present_base': '쉬','past_base': '쉬었','future_base' :'쉴','present': '쉬어','past': '쉬었어'},
    {'dictionary': '주문하다', 'meaning': 'to order','stem': '주문하','present_base': '주문해','past_base': '주문했','future_base' :'주문할','present': '주문해','past': '주문했어'},
    {'dictionary': '묻다', 'meaning': 'to ask','stem': '묻','present_base': '묻','past_base': '묻었','future_base' :'묻을','present': '묻어','past': '묻었어'},
    {'dictionary': '만들다', 'meaning': 'to make','stem': '만들','present_base': '만들','past_base': '만들었','future_base' :'만들','present': '만들어','past': '만들었어'},
    {'dictionary': '씻다', 'meaning': 'to wash','stem': '씻','present_base': '씻','past_base': '씻었','future_base' :'씻을','present': '씻어','past': '씻었어'},
    {'dictionary': '피하다 ', 'meaning': 'to avoid','stem': '피하','present_base': '피해','past_base': '피했','future_base' :'피할','present': '피해','past': '피했어'},
    {'dictionary': '만나다', 'meaning': 'to meet','stem': '만나','present_base': '만나','past_base': '만났','future_base' :'만날','present': '만나','past': '만났어'},
    {'dictionary': '알다 ', 'meaning': 'to know','stem': '알','present_base': '알','past_base': '알았','future_base' :'알','present': '알아','past': '알았어'},
    {'dictionary': '몰라다', 'meaning': 'to not know','stem': '몰라','present_base': '몰라','past_base': '몰랐','future_base' :'몰랄','present': '몰라','past': '몰랐어'},
    {'dictionary': '쓰다', 'meaning': 'to use','stem': '쓰','present_base': '써 ','past_base': '썼','future_base' :'쓸','present': '써','past': '썼어'},
    {'dictionary': '이야기하다', 'meaning': 'to talk, chat','stem': '이야기하','present_base': '이야기해','past_base': '이야기했','future_base' :'이야기할','present': '이야기해','past': '이야기했어'},
    {'dictionary': '공부하다', 'meaning': 'to study','stem': '공부하','present_base': '공부해','past_base': '공부했','future_base' :'공부할','present': '공부해','past': '공부했어'},
    {'dictionary': '찍다', 'meaning': 'to take (picture)','stem': '찍','present_base': '찍','past_base': '찍었','future_base' :'찍을','present': '찍어','past': '찍었어'},
    {'dictionary': '빌리다', 'meaning': 'to borrow','stem': '빌리','present_base': '빌려','past_base': '빌렸','future_base' :'빌릴','present': '빌려','past': '빌렸어'},
    {'dictionary': '전화하다 ', 'meaning': 'to telephone','stem': '전화하','present_base': '전화해','past_base': '전화했','future_base' :'전화할','present': '전화해','past': '전화했어'},
    {'dictionary': '걸다', 'meaning': 'to call, dial','stem': '걸','present_base': '걸','past_base': '걸었','future_base' :'걸','present': '걸어','past': '걸었어'},
    {'dictionary': '타다', 'meaning': 'to ride','stem': '타','present_base': '타','past_base': '탔','future_base' :'탈','present': '타','past': '탔어'},
    {'dictionary': '필요하다', 'meaning': 'to need','stem': '필요하','present_base': '필요해','past_base': '필요했','future_base' :'필요할','present': '필요해','past': '필요했어'},
    {'dictionary': '도와주다', 'meaning': 'to help','stem': '도와주','present_base': '도와줘 ','past_base': '도와줬','future_base' :'도와줄','present': '도와줘','past': '도와줬어'},
    {'dictionary': '준비하다', 'meaning': 'to prepare','stem': '준비하 ','present_base': '준비해','past_base': '준비했','future_base' :'준비할','present': '준비해','past': '준비했어'},
    {'dictionary': '운동하다', 'meaning': 'to exercise','stem': '운동하','present_base': '운동해','past_base': '운동했','future_base' :'운동할','present': '운동해','past': '운동했어'},
    {'dictionary': '좋아하다', 'meaning': 'to like','stem': '좋아하 ','present_base': '좋아해','past_base': '좋아했','future_base' :'좋아할','present': '좋아해','past': '좋아했어'},
    {'dictionary': '싫어하다', 'meaning': 'to dislike','stem': '싫어하','present_base': '싫어해','past_base': '싫어했','future_base' :'싫어할','present': '싫어해','past': '싫어했어'},
    {'dictionary': '연습하다', 'meaning': 'to practice','stem': '연습하','present_base': '연습해','past_base': '연습했','future_base' :'연습할','present': '연습해','past': '연습했어'},
    {'dictionary': '싸우다 ', 'meaning': 'to fight','stem': '싸우 ','present_base': '싸워','past_base': '싸웠','future_base' :'싸울','present': '싸워','past': '싸웠어'},
    {'dictionary': '살다', 'meaning': 'to live','stem': '살','present_base': '살','past_base': '살았','future_base' :'살','present': '살아','past': '살았어'},
    {'dictionary': '시작하다', 'meaning': 'to start','stem': '시작하','present_base': '시작해','past_base': '시작했','future_base' :'시작할','present': '시작해','past': '시작했어'},
    {'dictionary': '끝내다', 'meaning': 'to finish','stem': '끝내','present_base': '끝내','past_base': '끝냈','future_base' :'끝낼','present': '끝내','past': '끝냈어'},
    {'dictionary': '대답하다', 'meaning': 'to answer','stem': '대답하','present_base': '대답해','past_base': '대답했','future_base' :'대답할','present': '대답해 ','past': '대답했어 '},
    {'dictionary': '출발하다', 'meaning': 'to depart','stem': '출발하','present_base': '출발해','past_base': '출발했','future_base' :'출발할','present': '출발해','past': '출발했어'},
    {'dictionary': '이기다', 'meaning': 'to win','stem': '이기','present_base': '이겨','past_base': '이겼','future_base' :'이길','present': '이겨','past': '이겼어'},
    {'dictionary': '패배시키다', 'meaning': 'to defeat','stem': '패배시키 ','present_base': '패배시켜','past_base': '패배시켰','future_base' :'패배시킬','present': '패배시켜','past': '패배시켰어 '},
    {'dictionary': '서두르다', 'meaning': 'to rush, hurry','stem': '서두르','present_base': '서둘러','past_base': '서둘렀','future_base' :'서두를','present': '서둘러 ','past': '서둘렀어'},
    {'dictionary': '기억하다', 'meaning': 'to remember','stem': '기억하','present_base': '기억해','past_base': '기억했','future_base' :'기억할','present': '기억해','past': '기억했어'},
    {'dictionary': '잊다', 'meaning': 'to forget','stem': '잊','present_base': '잊','past_base': '잊었','future_base' :'잊을','present': '잊어','past': '잊었어'},
    {'dictionary': '약속하다 ', 'meaning': 'to promise','stem': '약속하','present_base': '약속해','past_base': '약속했','future_base' :'약속할','present': '약속해','past': '약속했어'},
    {'dictionary': '미안하다', 'meaning': 'to be sorry','stem': '미안하','present_base': '미안해','past_base': '미안했','future_base' :'미안할','present': '미안해','past': '미안했어'},
    {'dictionary': '걱정하다 ', 'meaning': 'to worry','stem': '걱정하','present_base': '걱정해','past_base': '걱정했','future_base' :'걱정할','present': '걱정해','past': '걱정했어'},
    {'dictionary': '죽다', 'meaning': 'to die','stem': '죽 ','present_base': '죽 ','past_base': '죽었','future_base' :'죽을','present': '죽어','past': '죽었어'},
    {'dictionary': '태어나다', 'meaning': 'to be born','stem': '태어나','present_base': '태어나','past_base': '태어났','future_base' :'태어날','present': '태어나','past': '태어났어'},
    {'dictionary': '시도하다', 'meaning': 'to try','stem': '시도하','present_base': '시도해','past_base': '시도했','future_base' :'시도할','present': '시도해','past': '시도했어'},
    {'dictionary': '말다', 'meaning': 'to dont do','stem': '말','present_base': '말','past_base': '말았','future_base' :'말','present': '말아','past': '말았어'},
    {'dictionary': '이해하다', 'meaning': 'to understand','stem': '이해하','present_base': '이해해','past_base': '이해했','future_base' :'이해할','present': '이해해 ','past': '이해했어'},
    {'dictionary': '신나다', 'meaning': 'to be excited','stem': '	신나','present_base': '	신나','past_base': '	신났','future_base' :'	신날','present': '신나','past': '	신났어'}
]

app.get('/',(req,res) =>{
   res.sendfile(__dirname +'../client/index.html');
})

app.get('/api/verbs',(req,res) => {
  res.json(data);
});

app.listen('3030', function(){
  console.log("data server running");
})
