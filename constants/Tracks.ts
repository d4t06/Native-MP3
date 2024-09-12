import { Track } from "react-native-track-player";

const songs = [
   {
      id: 129,
      name: "Creep (Extended)",
      singer: "GAMPER & DADONI",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fhuudat01234560-creepextended-gamperdadoni-8177347-mp3cut-net--mp3_1725592600268?alt=media",
      song_file_path:
         "test/huudat01234560-creepextended-gamperdadoni-8177347-mp3cut-net--mp3_1725592600268",
      duration: 171,
      size: 2911,
   },
   {
      id: 156,
      name: "Dusk Till Dawn",
      singer: "Zayn, Sia",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fdusktilldawn-zaynsia-5164057-mp3_1725625682859?alt=media&token=0c623f88-f4d2-4831-817d-ce791281ff91",
      song_file_path: "test/dusktilldawn-zaynsia-5164057-mp3_1725625682859",
      duration: 239,
      size: 3750,
   },
   {
      id: 157,
      name: "End Of Time",
      singer: "...",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fburywf6scq-mp3_1725644707067?alt=media&token=4ba74689-8b2f-4219-a170-b07ed57cb182",
      song_file_path: "test/burywf6scq-mp3_1725644707067",
      duration: 187,
      size: 3169,
   },
   {
      id: 154,
      name: "Firestone",
      singer: "Kygo & Conrad Sewell",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Ffirestone-kygoconradsewell-9644875-mp3_1725622602942?alt=media&token=e6b8986d-c321-4cf0-a9d1-42ed8e29b34c",
      song_file_path:
         "test/firestone-kygoconradsewell-9644875-mp3_1725622602942",
      duration: 271,
      size: 4486,
   },
   {
      id: 149,
      name: "Hongkong1",
      singer: "Nguyễn Trọng Tài, San Ji, Double X Band",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fhongkong1-nguyentrongtaisanjidoublexband-5689972-mp3_1725622584682?alt=media&token=1be5e6c4-b877-48fa-9708-469456a109ca",
      song_file_path:
         "test/hongkong1-nguyentrongtaisanjidoublexband-5689972-mp3_1725622584682",
      duration: 290,
      size: 4640,
   },
   {
      id: 151,
      name: "Ignite",
      singer: "K-391, Alan Walker, Julie Bergan, Seung Ri (BIGBANG)",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fignite-k391alanwalkerjulieberganseungribigbang-5471683-mp3_1725622591992?alt=media&token=5c08f8fa-e683-46ff-b3b7-f15221894e20",
      song_file_path:
         "test/ignite-k391alanwalkerjulieberganseungribigbang-5471683-mp3_1725622591992",
      duration: 210,
      size: 3383,
   },
   {
      id: 144,
      name: "It Ain't Me",
      singer: "Kygo,Selena Gomez",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fhuudat01234560-itaintme-kygoselenagomez-5817724-mp3_1725610872769?alt=media",
      song_file_path:
         "test/huudat01234560-itaintme-kygoselenagomez-5817724-mp3_1725610872769",
      duration: 219,
      size: 3665,
   },
   {
      id: 127,
      name: "level.mp3",
      singer: "...",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Flevel-mp3_1725554678694?alt=media",
      song_file_path: "test/level-mp3_1725554678694",
      duration: 33,
      size: 521,
   },
   {
      id: 136,
      name: "Payphone",
      singer: "Maroon 5, Wiz Khalifa",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fpayphone-maroon5wizkhalifa-11235958-mp3_1725595469122?alt=media",
      song_file_path:
         "test/payphone-maroon5wizkhalifa-11235958-mp3_1725595469122",
      duration: 232,
      size: 3868,
   },
   {
      id: 142,
      name: "Perfect",
      singer: "Edsheeran",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fhuudat01234560-perfect-edsheeran-5208784-mp3_1725610747031?alt=media",
      song_file_path:
         "test/huudat01234560-perfect-edsheeran-5208784-mp3_1725610747031",
      duration: 263,
      size: 4118,
   },
   {
      id: 152,
      name: "Sing Me to Sleep",
      singer: "Alan Walker",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fsingmetosleep-alanwalker-5815065-mp3_1725622595573?alt=media&token=74225b38-d32d-46b4-adb0-05b723f0ff5b",
      song_file_path: "test/singmetosleep-alanwalker-5815065-mp3_1725622595573",
      duration: 187,
      size: 3172,
   },
   {
      id: 153,
      name: "Something Just Like This",
      singer: "The Chainsmokers,Coldplay",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fsomethingjustlikethis-thechainsmokerscoldplay-5337136-mp3_1725622599258?alt=media&token=08242b34-6836-4284-a729-7888e8e71fa5",
      song_file_path:
         "test/somethingjustlikethis-thechainsmokerscoldplay-5337136-mp3_1725622599258",
      duration: 244,
      size: 4054,
   },
   {
      id: 158,
      name: "Superheroes",
      singer: "The Script",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fsuperheroes-thescript-5490436-mp3_1725644712384?alt=media&token=27ac216c-74dd-440d-bc69-821538946627",
      song_file_path: "test/superheroes-thescript-5490436-mp3_1725644712384",
      duration: 245,
      size: 4073,
   },
   {
      id: 130,
      name: "Take Me To Infinity - Consoul Trainin",
      singer: "Consoul Trainin",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fhuudat01234560-takemetoinfinity-consoultrainin-4723303-mp3_1725592657891?alt=media",
      song_file_path:
         "test/huudat01234560-takemetoinfinity-consoultrainin-4723303-mp3_1725592657891",
      duration: 207,
      size: 3249,
   },
   {
      id: 133,
      name: "Thiên Đàng",
      singer: "Wowy, JoliPoli",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2F9a326b3ca69b17cf03938ebb8e095830-mp3_1725595340137?alt=media",
      song_file_path: "test/9a326b3ca69b17cf03938ebb8e095830-mp3_1725595340137",
      duration: 232,
      size: 3653,
   },
   {
      id: 155,
      name: "Tired",
      singer: "Alan Walker & Gavin James",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Ftired-mp3_1725622605711?alt=media&token=1bc0a57d-78ec-4a64-808b-047845206e6c",
      song_file_path: "test/tired-mp3_1725622605711",
      duration: 240,
      size: 3752,
   },
   {
      id: 150,
      name: "Waiting for Love",
      singer: "Avicii",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fwaitingforlove-avicii-5008939-mp3_1725622588302?alt=media&token=ec43d75d-e879-4b77-875d-f1733346b535",
      song_file_path: "test/waitingforlove-avicii-5008939-mp3_1725622588302",
      duration: 228,
      size: 3577,
   },
   {
      id: 126,
      name: "wakemeup.mp3",
      singer: "...",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fwakemeup-mp3_1725554671937?alt=media",
      song_file_path: "test/wakemeup-mp3_1725554671937",
      duration: 113,
      size: 1781,
   },
   {
      id: 135,
      name: "Yêu 5 (Hoaprox Remix)",
      singer: "Rhymastic, Hoaprox",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fyeu5hoaproxremix-rhymastichoaprox-4771204-mp3_1725595404377?alt=media",
      song_file_path:
         "test/yeu5hoaproxremix-rhymastichoaprox-4771204-mp3_1725595404377",
      duration: 250,
      size: 3913,
   },
   {
      id: 148,
      name: "Yêu Một Người Có Lẽ",
      singer: "Miu Lê, Lou Hoàng",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fhuudat01234560-yeumotnguoicole-miulelouhoang-4355705-mp3_1725615721421?alt=media&token=8ead47be-2752-411f-b579-d0ec4fec9c62",
      song_file_path:
         "test/huudat01234560-yeumotnguoicole-miulelouhoang-4355705-mp3_1725615721421",
      duration: 253,
      size: 3962,
   },
   {
      id: 139,
      name: "Đã Lỡ Yêu Em Nhiều",
      singer: "JustaTee",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fhuudat01234560-daloyeuemnhieu-justatee-5274092-mp3_1725596137242?alt=media",
      song_file_path:
         "test/huudat01234560-daloyeuemnhieu-justatee-5274092-mp3_1725596137242",
      duration: 261,
      size: 4208,
   },
   {
      id: 147,
      name: "Đã Lỡ Yêu Em Nhiều (Hoaprox Retro Mix)",
      singer: "JustaTee, Hoaprox",
      image_url: "",
      image_file_path: "",
      song_url:
         "https://firebasestorage.googleapis.com/v0/b/zingmp3-clone-61799.appspot.com/o/test%2Fhuudat01234560-daloyeuemnhieuhoaproxretromix-justateehoaprox-5322814-mp3_1725615613911?alt=media&token=b177eb86-64d5-4459-a24b-87c3e7abaeaa",
      song_file_path:
         "test/huudat01234560-daloyeuemnhieuhoaproxretromix-justateehoaprox-5322814-mp3_1725615613911",
      duration: 324,
      size: 5159,
   },
];

const trackList: Track[] = songs.map((s) => ({
   id: s.id,
   url: s.song_url,
   artist: s.singer,
   duration: s.duration,
   title: s.name,
}));

export default trackList;
