export interface Post {
    id: string;
    title: string;
    category: string;
    content: string;
    imageUrl: string;
  }
  
  export const posts: Post[] = [
    {
      id: "entremets",
      title: "Entremets法式蛋糕",
      category: "甜點學習隨筆記",
      content: "小小科普，Entremets字面上來看是法文「在兩道菜之間」（entre les mets）的意思，過去在筵席間斷時間裡向地位高貴的賓客或是君主獻上的額外菜餚。到了現代Etremets則專指「一種以海綿蛋糕加上慕斯或奶醬...",
      imageUrl: "/images/9.jpg",
    },
    {
      id: "PastryArticle",
      title: "巴黎甜點隨筆記",
      category: "關於甜點的各種",
      content: "巴黎甜點隨筆記 2 繼續進行。 後來，又再次來到了巴黎品嚐更加多元、豐富的甜點。 在巴黎，兩位最喜歡的女甜點師，她們的作品總是既細緻又優雅，能在風味中找到平衡 📍Des gâteaux et du pain 是我在法國...",
      imageUrl: "/images/10.jpg",
    },
    {
      id: "FantasyCityArticle",
      title: "童話裡的夢幻都市_哥本哈根",
      category: "我的旅行筆記",
      content: "前往丹麥前，在社群媒體上看遍了丹麥的著名景點，但在實際走訪後，丹麥的建築物在我心中留下了深深的印象。丹麥雖然不是我最喜愛的北歐都市，但它卻是充滿了各式的驚奇。經過六小時的火車從斯...",
      imageUrl: "/images/11.jpg",
    },
    // 你可以繼續增加其他文章
  ];
  