window.onerror = function(msg, src, line){
    alert("JS error: " + msg);
};

/* ---------- ELEMENT REFERENCES ---------- */
const access = document.getElementById("access");
const start = document.getElementById("start");
const noteScreen = document.getElementById("noteScreen");
const noteEl = document.getElementById("note");
const numberBtn = document.getElementById("numberBtn");

/* ---------- PASSWORD ---------- */
function checkDate(){
    const dd = document.getElementById("dd");
const mm = document.getElementById("mm");
const yy = document.getElementById("yy");

    const pass =
        dd.value.padStart(2,"0") +
        mm.value.padStart(2,"0") +
        yy.value.padStart(2,"0");

    if(pass === "040406"){
        access.classList.add("hidden");
        start.classList.remove("hidden");
        crackers();
    }
}

/* ---------- CRACKERS ---------- */
function crackers(){
    for(let i=0;i<30;i++){
        const p=document.createElement("div");
        p.className="particle";
        p.style.left="50%";
        p.style.top="50%";
        p.style.setProperty("--x",(Math.random()*300-150)+"px");
        p.style.setProperty("--y",(Math.random()*300-150)+"px");
        document.body.appendChild(p);
        setTimeout(()=>p.remove(),1500);
    }
}

/* ---------- TYPEWRITER ENGINE ---------- */
let index = 0;
let currentMessage = "";
let flyingInterval;

function typeWriterEnhanced(onComplete){
    if(index < currentMessage.length){
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = currentMessage.charAt(index++);
        noteEl.appendChild(span);

        let delay = 32;
        if(span.textContent === "." || span.textContent === ",") delay = 260;
        if(span.textContent === "\n") delay = 420;

        setTimeout(() => typeWriterEnhanced(onComplete), delay);
    } else {
        if(onComplete) onComplete();
    }
}

/* ---------- START NOTE ---------- */
function startNote(){
    start.classList.add("hidden");
    noteScreen.classList.remove("hidden");

    noteEl.innerHTML = "";
    index = 0;
    currentMessage = introMessage;

    typeWriterEnhanced(() => {
        numberBtn.classList.remove("hidden");
    });
}

/* ---------- MESSAGES ---------- */
const introMessage = `I am very very sorry for everything enaku enna solrathu nu therla unta 
ithe nerla pathu solalnum thonuchu
 but nee athukana chance ah kudukala nanum create pana try panala.
 
 En sry kekanum na unta rmba rmba fake ah tha irunthu irukan 
 unta na 70% lies matum tha soli irukan unta solanum nu nenaipen
  but nee alrdy eh pesurathu illa pesamaya poitana...
  
  unta ippo elame solran one by one i am so sorry`;

const message1 = `first enna na, na onum upsc aspirant la kedayathu
 na just ncc la irunthathuku kuduthathu athulayum academics mark ilana nu kedaikala.
Actual na onum padikura payan la kedayathu enoda class la na tha first 
but enna keela irunthu nee solra maari tha na onum matured la illa just
elathium siruchutu enna pesurom ne theriama suthitu irukura person tha 
nanu enaku seriosness na enna ne theriathu aprm en na unta ipadi sonana...
   
en scl la elarume padikura pasanga tha edupanga enterence exam eluthi tha varanum. 
epidi ponan naappa anga wrk panraru so anga work panrvanga la oda child padikalam 
apidi na paduchan so, basic na padikathavan enna elarum corner panuvanga athu enaku thirupi
nadakakodathu nu nenachan en school la enaku frnds nu sola 3 pera thavara yarum illa`;

const message2 = `mithra nu oru ponu nu sonan la athu aduchu vitathu tha
reason enna solrathu just making it equal nu vechuko ve...
athu en na sonan nu therla reason enna na una na lose pana koodathu
nu nenachan antha time la okay fine sorry for that ipadi la 
sola kudathu i am really sorry`;

const message3 = `Ithu elarukume therunjathu thaa na inum antha 
person ku tha wait panran athe person ah daily thoongura appo 
enthirukura appo only thought same person thaan nanum maranthuduvan 
nu nenaikuran mudilaye enna panrathu. first la soluvanga na ethu kittan
ippo la en pesurathu illa nu kekuranga enala onum sola mudila en pesurathu
illa nu athunala tha frnds ah irupom frnds ah irupom nu solite irupan but
appoyum nee pesamata enta rmba feel pani irukan bcoz en therla unna vitu 
poganum nenaipen but mudila. eppo na unta pesa arambechan appo la irunthu 
ippo varaikum una nenaikatha naal eh illa ene therla. Enta neraya per soli 
irukanga nee vera yaro love panra athutha enta pesala nu na ithu varaikum
athe nambave illa may be unmai ah irukalam anyways.`;

const loveMessage = `2026 vanthuduchu nenachu kooda pakka mudla ivalvu fast 
ah life poguthu la enaku ippo nu matum illa epavume nee tha enaku mukiyam
 athunala ippo varaikum na entha oru girls kooda attraction or ethuvum 
 kedayathu athula anuradha va ingore panidu antha ponu enaku inum purunjukave
  mudla enga pathalum hiii nu solra excitement agura lol but she is one of 
  the best friend i got in 2025 Enna na oore soluthu namma yen iruka koodathu 
  epavum solra maari tha unakaga na enna vena seiven en life la una thavara na 
  entha oru ponum na nenachu kooda pathathu illa inthanaal varaikum okay na
   pongal celebration onna celebrate pana porom ilana first na inaiku ithu
    unaku na anupuvana nu kooda therla..`;

const endMessage = `Sorry na
just unta ithe solanum nenachan
sry for wasting your time

ithe vechu na prove pana la nenaikala
enaku na thapu panitano nu
dailyum oduthu

athunala una nenaikuran pola
ippo soltan
so ithuku aprm pirachana illa

Thanks for giving your time`;

const tamilProverb = `காதல் என்பது
பார்த்த கணம் அல்ல…
பிரிந்து இருந்தாலும்
மனதில் நிற்கும் உணர்வு.`;

/* ---------- NUMBER 1 ---------- */
function handleNumber1(){
    numberBtn.disabled = true;
    numberBtn.classList.add("hidden");

    noteEl.innerHTML = "";
    index = 0;
    currentMessage = message1;

    flyingInterval = setInterval(createFlyingSorry,700);

    typeWriterEnhanced(() => {
        clearInterval(flyingInterval);
        document.getElementById("number2Btn").classList.remove("hidden");
    });
}

/* ---------- NUMBER 2 ---------- */
function handleNumber2(){
    const btn2 = document.getElementById("number2Btn");
    btn2.disabled = true;
    btn2.classList.add("hidden");

    noteEl.innerHTML = "";
    index = 0;
    currentMessage = message2;

    flyingInterval = setInterval(createFlyingSorry,800);

    typeWriterEnhanced(() => {
        clearInterval(flyingInterval);
        document.getElementById("number3Btn").classList.remove("hidden");
    });
}

/* ---------- NUMBER 3 ---------- */
function handleNumber3(){
    const btn3 = document.getElementById("number3Btn");
    btn3.disabled = true;
    btn3.classList.add("hidden");

    const fa = document.getElementById("finalAudio");
if (fa) {
    fa.play().catch(() => {});
}


    noteEl.innerHTML = "";
    index = 0;
    currentMessage = message3;

    typeWriterEnhanced(() => {
        const finalChoice = document.createElement("div");
        finalChoice.id = "finalChoice";
        finalChoice.innerHTML = `
            <button class="green" onclick="handleContinue()">Continue</button>
            <button class="text" onclick="handlePothum()">Pothum</button>
        `;
        noteScreen.appendChild(finalChoice);
    });
}

/* ---------- CONTINUE (LOVE MODE) ---------- */
function handleContinue(){
    document.getElementById("finalChoice")?.remove();

    document.body.classList.add("love-mode");
    noteEl.classList.add("love-box");

    playSong(0.5);

    noteEl.innerHTML = "";
    index = 0;
    currentMessage = loveMessage;

    const loveInterval = setInterval(createLoveFloat,400);

    typeWriterEnhanced(() => {
        clearInterval(loveInterval);
        showLoveActions();
    });
}

/* ---------- POTHUM ---------- */
function handlePothum(){
    document.getElementById("finalChoice")?.remove();

    noteEl.innerHTML = "";
    index = 0;
    currentMessage = endMessage;
    typeWriterEnhanced();
}


/* ---------- LOVE ACTIONS ---------- */
function showLoveActions(){
    const actions = document.createElement("div");
    actions.className = "love-actions";

    actions.innerHTML = `
        <button class="friend" onclick="playFriendVideo()">Friends ah irupom</button>
        <button class="continue" onclick="continueAfterLove()">Continue</button>
    `;

    noteScreen.appendChild(actions);
}

/* ---------- FINAL FUN ---------- */
function continueAfterLove(){
    const oldActions = document.querySelector(".love-actions");
if (oldActions) oldActions.remove();

    noteEl.innerHTML = "";

    const proverb = document.createElement("div");
    proverb.className = "proverb";
    proverb.innerText = tamilProverb;
    noteScreen.appendChild(proverb);

    const actions = document.createElement("div");
    actions.className = "final-actions";
    actions.innerHTML = `
        <button class="runaway" id="loveRun">Love you too ❤️</button>
        <button class="still" onclick="endWithoutLove()">No love 😒</button>
    `;
    noteScreen.appendChild(actions);

    enableRunaway();
}

function enableRunaway(){
    const btn = document.getElementById("loveRun");
    btn.addEventListener("mouseenter", moveButton);
    btn.addEventListener("click", finalLove);
}

function moveButton(){
    document.getElementById("loveRun")
        .style.transform = `translate(${Math.random()*200-100}px,${Math.random()*120-60}px)`;
}

function finalLove(){
    noteScreen.innerHTML = "";
    crackers();
    const t=document.createElement("div");
    t.className="love-end";
    t.innerHTML="LOVE YOU<br>× 300000";
    noteScreen.appendChild(t);
}

/* ---------- EFFECTS ---------- */
function createFlyingSorry(){
    const s=document.createElement("div");
    s.className="fly-sorry";
    s.textContent=["🙏","😔","💔","🥺"][Math.floor(Math.random()*4)];
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),3000);
}

function createLoveFloat(){
    const e=document.createElement("div");
    e.className="love-float";
    e.textContent=["❤️","💖","🎂","🎉","🥰"][Math.floor(Math.random()*5)];
    e.style.left=Math.random()*100+"vw";
    document.body.appendChild(e);
    setTimeout(()=>e.remove(),6000);
}

/* ---------- AUDIO ---------- */
function playSong(v=0.5){
    const s=document.getElementById("bgSong");
    if(s){s.volume=v;s.play().catch(()=>{});}
}
