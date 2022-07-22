$("document").ready(init);
function init () {
    // 데이터 조회
    let arrMovie = selectMovies();
    console.log(arrMovie);
    // 데이터 기반으로 option 생성, text는 title로 지정
    arrMovie.forEach((oMovie, idx) => {
        let eOption = `<option value="${idx}">${oMovie.title}</option>`   // template literal, backtick 사용
        $("#sel-movie").append(eOption);
    });
}
function selectMovies () {
    let arrMovie = [
        {
            imgUrl: "https://image.ajunews.com/content/image/2019/05/26/20190526110735836979.jpg",
            title: "기생충",
            content: "여러 사업에 도전했지만 실패한 아버지 김기택(송강호 扮), 해머던지기 선수 출신인 어머니 박충숙(장혜진 扮), 명문대 지망 4수생 첫째(장남) 김기우(최우식 扮)..."
        },
        {
            imgUrl: "https://file2.nocutnews.co.kr/newsroom/image/2022/06/22/202206220912066245_0.jpg",
            title: "탑건",
            content: "1969년 3월 3일, 미합중국 해군은 최상위 1%의\n" +
                "전투기 조종사들을 위한 엘리트 교육학교를 설립하였다.\n" +
                "그들을 부르는 이름은: Top Gun"
        },
        {
            imgUrl: "http://gamefocus.co.kr/wys2/file_attach/2022/06/29/1656463509_80945.jpg",
            title: "미니언즈2",
            content: "세계 최고의 슈퍼 악당을 꿈꾸는 미니보스 그루와 그를 따라다니는 미니언들. \n" +
                "어느 날 그루는 최고의 악당 조직 빌런6의 마법 스톤을 훔치는데 성공하지만 \n" +
                "뉴페이스 미니언 오토의 실수로 스톤을 잃어버리고 빌런6에게 납치까지 당한다"
        },
        {
            imgUrl: "https://img.mbn.co.kr/filewww/news/other/2022/05/30/820023200550.jpg",
            title: "헤어질 결심",
            content: "영화는 사격 연습을 하는 부산서부경찰서 강력팀 소속 경감 장해준(박해일 분) 팀장과 후배 형사 오수완(고경표 분)의 장면으로 시작한다. 해준은 사격 연습 이후 ‘질곡동 사건’에 대하여 얘기하다, 1팀의 지지부진한 수사를 언급하며 수완에게 \"우리가 하자\"며 독려한다.[1] 이후 '오빠 PC방'으로 이동한 해준. 해준은 PC방 아르바이트생으로부터 용의자 '이지구'가 최근 선불권을 환불받으러 왔다는 제보를 접수한다. 이후 해준은 수완에게 잠복근무를 지시하고, 졸음운전을 하면서 '이포'로 간다."
        },
        {
            imgUrl: "http://joyposter.cafe24.com//NEW-posters/FMV/FMV-308.jpg",
            title: "라라랜드",
            content: "꿈을 꾸는 사람들을 위한 별들의 도시 '라라랜드'. 재즈 피아니스트 '세바스찬'(라이언 고슬링)과 성공을 꿈꾸는 배우 지망생 '미아'(엠마 스톤). 인생에서 가장 빛나는 순간 만난 두 사람은 미완성인 서로의 무대를 만들어가기 시작한다."
        }
    ]

    return arrMovie;
}
/**
 * 내가 작성한 정보를 기반으로 카드를 더하는 기능
 * @param {object} oOpt : (imgUrl, content, star, comment)
 */
function addCard () {
    let oMovie = getMovieInfo();

    let oCard = {
        imgUrl: oMovie.imgUrl,
        title: oMovie.title,
        content: oMovie.content,
        rating: $("#rating option:selected").text(),
        comment: $("#comment").val()
    }
    let divCardCntr = document.querySelector("#cardCntr");

    // card 생성
    let htmlCard = createCard(oCard);

    // card 끝에 추가
    $(divCardCntr).append(htmlCard);
}

function createCard (oCard) {
    let card = `
    <div class="col">
        <div class="card">
            <img src="${oCard.imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${oCard.title}</h5>
                    <p class="card-content">${oCard.content}</p>
                    <p class="card-rating">${oCard.rating}</p>
                    <p class="card-comment">${oCard.comment}</p>
                </div>
        </div>
    </div>`

    return card;
}
/* 카드 복제 기능 */
// function createCard (oCard) {
//
//     let divCard = $("#cardCntr > .col")[0];
//
//     let newCard = document.importNode(divCard, true);   // card 복사, deep copy
//     // 복사 카드 입력값으로 설정
//     let keys = Object.keys(oCard);
//     for(let key of keys){
//         setCard(newCard, key, oCard[key]);
//     }
//
//     // 생성된 카드 반환
//     return newCard;
// }
// function setCard (card, type, val) {
//      // 카드내에 특정 엘리먼트에 접근해 값을 바꿔야한다.
//     /**
//      * 엘리먼트 접근자
//      * img : .card-img-top
//      * title : .card-title
//      * content : .card-content
//      * rating : .card-rating
//      * comment : .card-comment
//      */
//     switch (type) {
//         case "imgUrl":
//             $(card).find(".card-img-top").eq(0).attr("src", val);
//
//             break;
//         case "title":
//             $(card).find(".card-title").eq(0).html(val);
//
//             break;
//         case "content":
//             $(card).find(".card-content").eq(0).html(val);
//
//             break;
//         case "rating":
//             $(card).find(".card-rating").eq(0).html(val);
//
//             break;
//         case "comment":
//             $(card).find(".card-comment").eq(0).html(val);
//
//             break;
//     }
// }
function getMovieInfo (target) {
    let arrMovie = selectMovies();

    let idx = $("#sel-movie").val();

    return arrMovie[idx];
}