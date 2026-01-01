const verses = [
  {
    ar: "لا تخف لأني معك. لا تتلفت لأني إلهك. قد أيدتك وأعنتك وأمسكت بيمين بري.",
    en: "Fear thou not; for I am with thee: be not dismayed; for I am thy God.",
    ref: "Isaiah 41:10"
  },
  {
    ar: "أنا هو معك ولا أتركك حتى أفعل ما كلمتك به.",
    en: "I am with thee, and will not leave thee.",
    ref: "Genesis 28:15"
  },
  {
    ar: "تعالوا إليّ يا جميع المتعبين والثقيلي الأحمال وأنا أريحكم.",
    en: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
    ref: "Matthew 11:28"
  },
  {
    ar: "سلامي أترك لكم. سلامي أعطيكم. لا تضطرب قلوبكم ولا ترهب.",
    en: "Peace I leave with you, my peace I give unto you.",
    ref: "John 14:27"
  },
  {
    ar: "كما أحبني الآب كذلك أحببتكم أنا. اثبتوا في محبتي.",
    en: "As the Father hath loved me, so have I loved you.",
    ref: "John 15:9"
  },
  {
    ar: "لا أهملك ولا أتركك.",
    en: "I will never leave thee, nor forsake thee.",
    ref: "Hebrews 13:5"
  },
  {
    ar: "الرب قريب منك وهو يخلّص المنكسري القلوب.",
    en: "The Lord is near to the brokenhearted.",
    ref: "Psalm 34:18"
  },
  {
    ar: "كل الأشياء تعمل معًا للخير للذين يحبون الله.",
    en: "All things work together for good.",
    ref: "Romans 8:28"
  },
  {
    ar: "أنا هو القيامة والحياة. من آمن بي ولو مات فسيحيا.",
    en: "I am the resurrection, and the life.",
    ref: "John 11:25"
  },
  {
    ar: "الرب إلهك في وسطك جبار يخلّص. يفرح بك فرحًا.",
    en: "The Lord thy God in the midst of thee is mighty; he will save.",
    ref: "Zephaniah 3:17"
  },
  {
    ar: "لا تضطرب قلوبكم. أنتم تؤمنون بالله فآمنوا بي.",
    en: "Let not your heart be troubled.",
    ref: "John 14:1"
  },
  {
    ar: "إن سرت في وادي ظل الموت لا أخاف شرًا لأنك أنت معي.",
    en: "I will fear no evil: for thou art with me.",
    ref: "Psalm 23:4"
  },
  {
    ar: "محبة الله قد انسكبت في قلبك بالروح القدس.",
    en: "The love of God is shed abroad in our hearts.",
    ref: "Romans 5:5"
  },
  {
    ar: "لا تدع قلبك يضعف ولا تخف.",
    en: "Let not your heart faint, neither be afraid.",
    ref: "Deuteronomy 20:3"
  },
  {
    ar: "الرب يقاتل عنك وأنت تصمت.",
    en: "The Lord shall fight for you.",
    ref: "Exodus 14:14"
  },
  {
    ar: "أنا هو الراعي الصالح. أبذل نفسي عنك.",
    en: "I am the good shepherd.",
    ref: "John 10:11"
  },
  {
    ar: "ثق أني معك كل الأيام إلى انقضاء الدهر.",
    en: "Lo, I am with you always.",
    ref: "Matthew 28:20"
  },
  {
    ar: "لا تخف أيها القطيع الصغير، لأن أباكم قد سر أن يعطيكم الملكوت.",
    en: "Fear not, little flock.",
    ref: "Luke 12:32"
  },
  {
    ar: "أنا معك لأخلّصك.",
    en: "I am with thee to save thee.",
    ref: "Jeremiah 15:20"
  },
  {
    ar: "الرب قريب منك اليوم ويسمع صلاتك.",
    en: "The Lord is near unto all them that call upon him.",
    ref: "Psalm 145:18"
  },
    // Day 21
  {
    ar: "لا تخف لأني أنا معك. أنا أمسك بيدك وأقودك.",
    en: "Fear not; I am with you. I will hold your right hand.",
    ref: "Isaiah 41:13"
  },
  // Day 22
  {
    ar: "أنا أحبك بمحبة أبدية، لذلك أدمت لك الرحمة.",
    en: "I have loved you with an everlasting love.",
    ref: "Jeremiah 31:3"
  },
  // Day 23
  {
    ar: "لا تدع قلبك يضطرب ولا تخف، أنا سلامك.",
    en: "Let not your heart be troubled, neither let it be afraid.",
    ref: "John 14:27"
  },
  // Day 24
  {
    ar: "أنا أراك في تعبك، وأسمع أنين قلبك.",
    en: "I have surely seen your affliction.",
    ref: "Exodus 3:7"
  },
  // Day 25
  {
    ar: "اثبت، أنا معك في كل خطوة.",
    en: "Stand firm. I am with you.",
    ref: "2 Chronicles 20:17"
  },
  // Day 26
  {
    ar: "أنا لا أتركك وحدك، بل آتي إليك.",
    en: "I will not leave you comfortless: I will come to you.",
    ref: "John 14:18"
  },
  // Day 27
  {
    ar: "أنا أفرح بك، وأبتهج بحياتك.",
    en: "The Lord rejoices over you with joy.",
    ref: "Zephaniah 3:17"
  },
  // Day 28
  {
    ar: "لا تخف من الغد، أنا هناك قبلك.",
    en: "Do not fear tomorrow; I am already there.",
    ref: "Matthew 6:34"
  },
  // Day 29
  {
    ar: "أنا إلهك، أقويك وأعينك.",
    en: "I am your God; I will strengthen you.",
    ref: "Isaiah 41:10"
  },
  // Day 30
  {
    ar: "سلامي يحفظ قلبك وفكرك.",
    en: "The peace of God will guard your heart and mind.",
    ref: "Philippians 4:7"
  },
  // Day 31
  {
    ar: "أنا قريب منك أكثر مما تتخيل.",
    en: "The Lord is near to you.",
    ref: "Psalm 34:18"
  },
  // Day 32
  {
    ar: "لا تخف، إيمانك يرفعك.",
    en: "Do not be afraid; your faith makes you strong.",
    ref: "Mark 5:36"
  },
  // Day 33
  {
    ar: "أنا راعيك الصالح ولن أتركك.",
    en: "I am the good shepherd.",
    ref: "John 10:14"
  },
  // Day 34
  {
    ar: "أنا أمسح دموعك وأجدد قلبك.",
    en: "God shall wipe away all tears.",
    ref: "Revelation 21:4"
  },
  // Day 35
  {
    ar: "ثق أني أعمل لأجلك حتى إن لم ترَ.",
    en: "I am working for you even when you cannot see.",
    ref: "Romans 8:28"
  },
  // Day 36
  {
    ar: "أنا سندك حين تضعف.",
    en: "My grace is sufficient for you.",
    ref: "2 Corinthians 12:9"
  },
  // Day 37
  {
    ar: "لا تخف، أنا أمسك حياتك بيدي.",
    en: "No one will snatch you out of my hand.",
    ref: "John 10:28"
  },
  // Day 38
  {
    ar: "أنا أحبك كما أنت، وأقودك لما هو أفضل.",
    en: "I love you and will lead you.",
    ref: "Psalm 32:8"
  },
  // Day 39
  {
    ar: "أنا معك في الضيق وسأخرجك بسلام.",
    en: "I am with you in trouble; I will deliver you.",
    ref: "Psalm 91:15"
  },
  // Day 40
  {
    ar: "تشدد، أنا قوتك.",
    en: "Be strong; I am your strength.",
    ref: "Isaiah 40:29"
  },
  // Day 41
  {
    ar: "لا تخف، أنت ثمين في عيني.",
    en: "You are precious in my sight.",
    ref: "Isaiah 43:4"
  },
  // Day 42
  {
    ar: "أنا أسمع صلاتك حتى لو خرجت من قلبك بصمت.",
    en: "I hear your prayer.",
    ref: "Psalm 65:2"
  },
  // Day 43
  {
    ar: "لا تحمل همّك وحدك، سلّمه لي.",
    en: "Cast your burden on the Lord.",
    ref: "Psalm 55:22"
  },
  // Day 44
  {
    ar: "أنا أمين في كل وعودي لك.",
    en: "God is faithful.",
    ref: "1 Corinthians 1:9"
  },
  // Day 45
  {
    ar: "لا تخف من ضعفك، أنا أكمّلك.",
    en: "My power is made perfect in weakness.",
    ref: "2 Corinthians 12:9"
  },
  // Day 46
  {
    ar: "أنا أفتح لك طريقًا حيث لا ترى طريقًا.",
    en: "I will make a way in the wilderness.",
    ref: "Isaiah 43:19"
  },
  // Day 47
  {
    ar: "سلامي معك اليوم.",
    en: "Peace be with you.",
    ref: "John 20:19"
  },
  // Day 48
  {
    ar: "أنا أحيطك برحمتي من كل جانب.",
    en: "I surround you with mercy.",
    ref: "Psalm 32:10"
  },
  // Day 49
  {
    ar: "لا تخف، أنا نورك في الظلمة.",
    en: "I am your light in the darkness.",
    ref: "John 8:12"
  },
  // Day 50
  {
    ar: "أنا معك اليوم، وغدًا، وإلى الأبد.",
    en: "I am with you always.",
    ref: "Matthew 28:20"
  },
    // Day 51
  {
    ar: "أنا أرفعك من خوفك وأمنحك راحة.",
    en: "I will lift you out of fear and give you rest.",
    ref: "Psalm 34:4"
  },
  // Day 52
  {
    ar: "لا تقلق، أنا معك في كل لحظة.",
    en: "Do not be anxious; I am with you every moment.",
    ref: "Isaiah 41:10"
  },
  // Day 53
  {
    ar: "أنا أقويك حين تضعف.",
    en: "I give you strength when you are weak.",
    ref: "Isaiah 40:29"
  },
  // Day 54
  {
    ar: "اثبت، لا تتراجع، أنا أساندك.",
    en: "Stand firm; I will uphold you.",
    ref: "Psalm 55:22"
  },
  // Day 55
  {
    ar: "سلامي يغمر قلبك ويهدئ روحك.",
    en: "My peace will calm your heart and soul.",
    ref: "John 14:27"
  },
  // Day 56
  {
    ar: "أنا أسمع صلواتك، حتى التي لا تخرج بالكلام.",
    en: "I hear the prayers you whisper silently.",
    ref: "Psalm 145:18"
  },
  // Day 57
  {
    ar: "لا تيأس، فرحي بك لا ينتهي.",
    en: "Do not despair; my joy in you is everlasting.",
    ref: "Zephaniah 3:17"
  },
  // Day 58
  {
    ar: "أحبك بلا حدود وأرعاك في كل طريقك.",
    en: "I love you unconditionally and guide your steps.",
    ref: "Psalm 23:1-2"
  },
  // Day 59
  {
    ar: "أنا أمد يد العون لك في كل محنة.",
    en: "I extend my hand to help you in every trial.",
    ref: "Psalm 91:15"
  },
  // Day 60
  {
    ar: "أنا أقودك نحو الحياة الكاملة.",
    en: "I lead you to abundant life.",
    ref: "John 10:10"
  },
  // Day 61
  {
    ar: "لا تقلق بشأن الغد، أنا أتحكم فيه.",
    en: "Do not worry about tomorrow; I hold it in my hand.",
    ref: "Matthew 6:34"
  },
  // Day 62
  {
    ar: "أنا أملأ قلبك بالسلام والفرح.",
    en: "I fill your heart with peace and joy.",
    ref: "Romans 15:13"
  },
  // Day 63
  {
    ar: "أنا أسمعك، وأعرف همومك.",
    en: "I hear you and know your troubles.",
    ref: "Psalm 6:9"
  },
  // Day 64
  {
    ar: "أنا أستعيد قلبك حين ينكسر.",
    en: "I restore your heart when it is broken.",
    ref: "Psalm 147:3"
  },
  // Day 65
  {
    ar: "ثق بي، أنا أعمل من أجل الخير في حياتك.",
    en: "Trust me; I am working all things for your good.",
    ref: "Romans 8:28"
  },
  // Day 66
  {
    ar: "لا تقلق، أنا أحيطك بمحبة أبدية.",
    en: "Do not fear; I surround you with everlasting love.",
    ref: "Jeremiah 31:3"
  },
  // Day 67
  {
    ar: "أنا أرفعك من كل ضيق وأمنحك راحة.",
    en: "I lift you from every trouble and give you rest.",
    ref: "Matthew 11:28"
  },
  // Day 68
  {
    ar: "أنا أقوى من أي خوف لديك، أنا أساندك.",
    en: "I am stronger than your fears; I uphold you.",
    ref: "Psalm 27:1"
  },
  // Day 69
  {
    ar: "أنا أضيء دربك حين تكون مظلمًا.",
    en: "I light your path when it is dark.",
    ref: "Psalm 119:105"
  },
  // Day 70
  {
    ar: "أنا أهبك القوة للتغلب على كل شيء.",
    en: "I give you the strength to overcome all.",
    ref: "Philippians 4:13"
  },
  // Day 71
  {
    ar: "أنا أواسيك في حزنك وأمسح دموعك.",
    en: "I comfort you in sorrow and wipe your tears.",
    ref: "Revelation 21:4"
  },
  // Day 72
  {
    ar: "أنا أرفعك حين تنهار، وأدعوك للسلام.",
    en: "I lift you when you fall and call you to peace.",
    ref: "Psalm 145:18"
  },
  // Day 73
  {
    ar: "أنا أحمِ قلبك من كل قلق وخوف.",
    en: "I guard your heart from all worry and fear.",
    ref: "Philippians 4:6"
  },
  // Day 74
  {
    ar: "أنا أفرح بك وأحتفل بحياتك.",
    en: "I rejoice over you and celebrate your life.",
    ref: "Zephaniah 3:17"
  },
  // Day 75
  {
    ar: "أنا أحبك كما أنت وأقبل قلبك بكل ما فيه.",
    en: "I love you as you are and accept your heart fully.",
    ref: "Psalm 32:10"
  },
  // Day 76
  {
    ar: "أنا أريك الطريق وأقودك نحو الأفضل.",
    en: "I show you the way and lead you to the best.",
    ref: "Isaiah 30:21"
  },
  // Day 77
  {
    ar: "أنا أمد لك يدي لأرفعك من أي سقوط.",
    en: "I reach out my hand to lift you from any fall.",
    ref: "Psalm 37:24"
  },
  // Day 78
  {
    ar: "أنا أهبك قلبًا ثابتًا مليئًا بالرجاء.",
    en: "I give you a steadfast heart full of hope.",
    ref: "Jeremiah 29:11"
  },
  // Day 79
  {
    ar: "أنا أفتح لك أبوابًا لم ترها من قبل.",
    en: "I open doors for you that you have never seen.",
    ref: "Revelation 3:8"
  },
  // Day 80
  {
    ar: "أنا أملأ روحك بالسلام الذي يفوق كل فهم.",
    en: "I fill your spirit with peace that surpasses understanding.",
    ref: "Philippians 4:7"
  },
  // Day 81
  {
    ar: "أنا أمدك بالحكمة عندما تحتار.",
    en: "I give you wisdom when you are confused.",
    ref: "James 1:5"
  },
  // Day 82
  {
    ar: "أنا أستجيب لدعائك في كل وقت.",
    en: "I answer your prayers at all times.",
    ref: "Psalm 34:17"
  },
  // Day 83
  {
    ar: "أنا أملأ قلبك بالفرح وسط الظلام.",
    en: "I fill your heart with joy in the midst of darkness.",
    ref: "Psalm 16:11"
  },
  // Day 84
  {
    ar: "أنا أرفعك من الخوف وأعطيك الشجاعة.",
    en: "I lift you from fear and give you courage.",
    ref: "Deuteronomy 31:6"
  },
  // Day 85
  {
    ar: "أنا أحيطك بمحبة لا تنتهي.",
    en: "I surround you with endless love.",
    ref: "Psalm 36:7"
  },
  // Day 86
  {
    ar: "أنا أهبك قلبًا صبورًا ومتأملًا في طريقي.",
    en: "I give you a patient heart, waiting upon me.",
    ref: "Psalm 27:14"
  },
  // Day 87
  {
    ar: "أنا أرفع صوتك إلى السماء وأستمع لك.",
    en: "I lift your voice to heaven and hear you.",
    ref: "Psalm 65:2"
  },
  // Day 88
  {
    ar: "أنا أهبك قوة لتواجه كل صعوبة.",
    en: "I give you strength to face every difficulty.",
    ref: "Isaiah 40:31"
  },
  // Day 89
  {
    ar: "أنا أحبك بلا شروط وأحتضنك دائمًا.",
    en: "I love you unconditionally and embrace you always.",
    ref: "Romans 8:38-39"
  },
  // Day 90
  {
    ar: "أنا أُعطيك قلبًا ثابتًا وثقة لا تتزعزع.",
    en: "I give you a steadfast heart and unwavering trust.",
    ref: "Psalm 112:7"
  },
  // Day 91
  {
    ar: "أنا أرفرف فوقك بحنان وأحميك.",
    en: "I hover over you with tenderness and protect you.",
    ref: "Deuteronomy 32:11"
  },
  // Day 92
  {
    ar: "أنا أُشبع روحك بالطمأنينة.",
    en: "I satisfy your spirit with reassurance.",
    ref: "Psalm 23:5"
  },
  // Day 93
  {
    ar: "أنا أُجدد قلبك كل صباح بالرجاء.",
    en: "I renew your heart every morning with hope.",
    ref: "Lamentations 3:22-23"
  },
  // Day 94
  {
    ar: "أنا أقودك إلى برّ الطريق وأبعدك عن الشر.",
    en: "I guide you on the right path and keep you from evil.",
    ref: "Psalm 23:3"
  },
  // Day 95
  {
    ar: "أنا أستجيب لندائك في كل وقت.",
    en: "I respond to your call at all times.",
    ref: "Psalm 91:15"
  },
  // Day 96
  {
    ar: "أنا أملأ قلبك بالفرح والسلام.",
    en: "I fill your heart with joy and peace.",
    ref: "Romans 15:13"
  },
  // Day 97
  {
    ar: "أنا أُرشدك إلى الأمان والطمأنينة.",
    en: "I guide you to safety and reassurance.",
    ref: "Psalm 16:1"
  },
  // Day 98
  {
    ar: "أنا أحبك وأرعاك في كل لحظة.",
    en: "I love you and care for you every moment.",
    ref: "Psalm 121:7"
  },
  // Day 99
  {
    ar: "أنا أمدك بالشجاعة لتواجه أي تحدي.",
    en: "I give you courage to face any challenge.",
    ref: "Joshua 1:9"
  },
  // Day 100
  {
    ar: "أنا أملأ حياتك بالنور والسلام.",
    en: "I fill your life with light and peace.",
    ref: "Psalm 119:105"
  },
    // Day 101
  {
    ar: "أنا أُشعل قلبك بالأمل حين يضعف.",
    en: "I kindle your heart with hope when it grows weak.",
    ref: "Romans 15:13"
  },
  // Day 102
  {
    ar: "أنا أسمع صلاتك وأستجيب لها بسرّ.",
    en: "I hear your prayers and answer them in secret.",
    ref: "Matthew 6:6"
  },
  // Day 103
  {
    ar: "أنا أقوّيك حين تشعر بالعجز.",
    en: "I strengthen you when you feel powerless.",
    ref: "Isaiah 40:29"
  },
  // Day 104
  {
    ar: "أنا أفرح بك وأرفع قلبك للسلام.",
    en: "I rejoice over you and lift your heart to peace.",
    ref: "Zephaniah 3:17"
  },
  // Day 105
  {
    ar: "لا تقلق، أنا أمدك بكل ما تحتاج.",
    en: "Do not worry; I provide all you need.",
    ref: "Philippians 4:19"
  },
  // Day 106
  {
    ar: "أنا معك في كل يوم وكل لحظة.",
    en: "I am with you every day and every moment.",
    ref: "Psalm 23:4"
  },
  // Day 107
  {
    ar: "أنا أُشبع قلبك بالسلام وسط العواصف.",
    en: "I fill your heart with peace amidst storms.",
    ref: "John 16:33"
  },
  // Day 108
  {
    ar: "أنا أرفعك من خوفك وأمنحك الشجاعة.",
    en: "I lift you from fear and give you courage.",
    ref: "Deuteronomy 31:6"
  },
  // Day 109
  {
    ar: "أنا أقبل قلبك كما هو وأحبك بلا شروط.",
    en: "I accept your heart as it is and love you unconditionally.",
    ref: "Romans 8:38-39"
  },
  // Day 110
  {
    ar: "أنا أُشعل فرحك عندما تشعر بالحزن.",
    en: "I kindle your joy when you feel sorrow.",
    ref: "Psalm 30:5"
  },
  // Day 111
  {
    ar: "أنا أرفعك وأُطمئن قلبك.",
    en: "I lift you up and reassure your heart.",
    ref: "Psalm 94:19"
  },
  // Day 112
  {
    ar: "أنا أوجه خطواتك على الطريق المستقيم.",
    en: "I direct your steps on the right path.",
    ref: "Proverbs 3:6"
  },
  // Day 113
  {
    ar: "أنا أُعطيك القوة لتتحمل كل الصعاب.",
    en: "I give you the strength to endure all hardships.",
    ref: "Isaiah 40:31"
  },
  // Day 114
  {
    ar: "أنا أرفع همك وأجلب لك الراحة.",
    en: "I lift your burdens and bring you rest.",
    ref: "Matthew 11:28"
  },
  // Day 115
  {
    ar: "أنا أضيء حياتك بالنور والسلام.",
    en: "I light up your life with light and peace.",
    ref: "Psalm 119:105"
  },
  // Day 116
  {
    ar: "أنا أحيطك بمحبة أبدية.",
    en: "I surround you with everlasting love.",
    ref: "Jeremiah 31:3"
  },
  // Day 117
  {
    ar: "أنا أرفع قلبك وسط القلق وأمنحك الطمأنينة.",
    en: "I lift your heart amidst anxiety and give reassurance.",
    ref: "Philippians 4:6-7"
  },
  // Day 118
  {
    ar: "أنا أسمع صرخاتك وأردها بالسلام.",
    en: "I hear your cries and answer with peace.",
    ref: "Psalm 34:17"
  },
  // Day 119
  {
    ar: "أنا أُشبع روحك بالرجاء.",
    en: "I satisfy your spirit with hope.",
    ref: "Romans 15:13"
  },
  // Day 120
  {
    ar: "أنا أُقوي قلبك وأملأه بالثقة.",
    en: "I strengthen your heart and fill it with trust.",
    ref: "Psalm 112:7"
  },
  // Day 121
  {
    ar: "أنا أرفعك من كل سقوط وأدفعك للأمام.",
    en: "I lift you from every fall and propel you forward.",
    ref: "Psalm 37:24"
  },
  // Day 122
  {
    ar: "أنا أملأ قلبك بالفرح وسط الظلام.",
    en: "I fill your heart with joy in the midst of darkness.",
    ref: "Psalm 16:11"
  },
  // Day 123
  {
    ar: "أنا أُشعل قلبك بالأمل في كل يوم.",
    en: "I kindle your heart with hope every day.",
    ref: "Lamentations 3:22-23"
  },
  // Day 124
  {
    ar: "أنا أرفع روحك وأملأه بالسلام.",
    en: "I lift your spirit and fill it with peace.",
    ref: "Psalm 29:11"
  },
  // Day 125
  {
    ar: "أنا أُهديك قلبًا ثابتًا وسط العواصف.",
    en: "I give you a steadfast heart amidst storms.",
    ref: "Jeremiah 29:11"
  },
  // Day 126
  {
    ar: "أنا أُهديك حكمة كلما احتجت لها.",
    en: "I give you wisdom whenever you need it.",
    ref: "James 1:5"
  },
  // Day 127
  {
    ar: "أنا أرفعك من الخوف وأمنحك الأمان.",
    en: "I lift you from fear and give you safety.",
    ref: "Psalm 23:4"
  },
  // Day 128
  {
    ar: "أنا أُغطيك بحناني وأحميك دائمًا.",
    en: "I cover you with tenderness and protect you always.",
    ref: "Deuteronomy 32:11"
  },
  // Day 129
  {
    ar: "أنا أسمع كل صلاتك وأستجيب لها.",
    en: "I hear all your prayers and answer them.",
    ref: "Psalm 65:2"
  },
  // Day 130
  {
    ar: "أنا أُشبع روحك بالطمأنينة.",
    en: "I satisfy your spirit with reassurance.",
    ref: "Psalm 23:5"
  },
  // Day 131
  {
    ar: "أنا أملأ قلبك بالسلام والفرح.",
    en: "I fill your heart with peace and joy.",
    ref: "Romans 15:13"
  },
  // Day 132
  {
    ar: "أنا أُعطيك القوة لتواجه أي تحدي.",
    en: "I give you the strength to face any challenge.",
    ref: "Joshua 1:9"
  },
  // Day 133
  {
    ar: "أنا أرفع صوتك للسماء وأستمع لك.",
    en: "I lift your voice to heaven and hear you.",
    ref: "Psalm 65:2"
  },
  // Day 134
  {
    ar: "أنا أُشعل قلبك بالرجاء في كل لحظة.",
    en: "I kindle your heart with hope at every moment.",
    ref: "Lamentations 3:22-23"
  },
  // Day 135
  {
    ar: "أنا أهدئ قلبك حين يضطرب.",
    en: "I calm your heart when it is troubled.",
    ref: "John 14:27"
  },
  // Day 136
  {
    ar: "أنا أرفعك من كل سقوط وأدفعك للأمام.",
    en: "I lift you from every fall and push you forward.",
    ref: "Psalm 37:24"
  },
  // Day 137
  {
    ar: "أنا أضيء طريقك وسط الظلمة.",
    en: "I light your path in the darkness.",
    ref: "Psalm 119:105"
  },
  // Day 138
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا.",
    en: "I give you a steadfast and confident heart.",
    ref: "Psalm 112:7"
  },
  // Day 139
  {
    ar: "أنا أُشبع قلبك بالسلام والطمأنينة.",
    en: "I satisfy your heart with peace and reassurance.",
    ref: "Philippians 4:7"
  },
  // Day 140
  {
    ar: "أنا أحبك وأقبلك كما أنت.",
    en: "I love you and accept you as you are.",
    ref: "Romans 8:38-39"
  },
  // Day 141
  {
    ar: "أنا أرفعك وأمنحك الشجاعة وسط التحديات.",
    en: "I lift you and give you courage amid challenges.",
    ref: "Deuteronomy 31:6"
  },
  // Day 142
  {
    ar: "أنا أهدئ روحك وأملأها بالسلام.",
    en: "I soothe your spirit and fill it with peace.",
    ref: "Psalm 29:11"
  },
  // Day 143
  {
    ar: "أنا أُشعل قلبك بالرجاء والثقة.",
    en: "I kindle your heart with hope and trust.",
    ref: "Psalm 27:14"
  },
  // Day 144
  {
    ar: "أنا أملأ حياتك بالضوء والسلام.",
    en: "I fill your life with light and peace.",
    ref: "Psalm 119:105"
  },
  // Day 145
  {
    ar: "أنا أرفع قلبك وأملأه بالفرح.",
    en: "I lift your heart and fill it with joy.",
    ref: "Psalm 16:11"
  },
  // Day 146
  {
    ar: "أنا أستجيب لدعائك في كل لحظة.",
    en: "I respond to your prayer at every moment.",
    ref: "Psalm 91:15"
  },
  // Day 147
  {
    ar: "أنا أحبك بلا شروط وأحميك دائمًا.",
    en: "I love you unconditionally and protect you always.",
    ref: "Romans 8:38-39"
  },
  // Day 148
  {
    ar: "أنا أُشعل قلبك بالأمل في وسط الظلام.",
    en: "I kindle your heart with hope in the midst of darkness.",
    ref: "Psalm 16:11"
  },
  // Day 149
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا.",
    en: "I give you a steadfast and confident heart.",
    ref: "Psalm 112:7"
  },
  // Day 150
  {
    ar: "أنا أرفعك من كل خوف وأملأ قلبك بالشجاعة.",
    en: "I lift you from all fear and fill your heart with courage.",
    ref: "Deuteronomy 31:6"
  },
    // Day 151
  {
    ar: "أنا أهدئ قلبك حين يضطرب وأملأه بالسلام.",
    en: "I calm your heart when it is troubled and fill it with peace.",
    ref: "John 14:27"
  },
  // Day 152
  {
    ar: "أنا أرفعك من كل سقوط وأدفعك للأمام.",
    en: "I lift you from every fall and propel you forward.",
    ref: "Psalm 37:24"
  },
  // Day 153
  {
    ar: "أنا أضيء طريقك وسط الظلام وأرشد خطواتك.",
    en: "I light your path in darkness and guide your steps.",
    ref: "Psalm 119:105"
  },
  // Day 154
  {
    ar: "أنا أُشعل قلبك بالرجاء في كل يوم.",
    en: "I kindle your heart with hope every day.",
    ref: "Lamentations 3:22-23"
  },
  // Day 155
  {
    ar: "أنا أملأ حياتك بالنور والسلام.",
    en: "I fill your life with light and peace.",
    ref: "Psalm 119:105"
  },
  // Day 156
  {
    ar: "أنا أرفع قلبك وأملأه بالفرح والطمأنينة.",
    en: "I lift your heart and fill it with joy and reassurance.",
    ref: "Psalm 16:11"
  },
  // Day 157
  {
    ar: "أنا أحبك بلا شروط وأستمر في حمايتك.",
    en: "I love you unconditionally and continue to protect you.",
    ref: "Romans 8:38-39"
  },
  // Day 158
  {
    ar: "أنا أملأ روحك بالسلام الذي يفوق كل فهم.",
    en: "I fill your spirit with peace that surpasses understanding.",
    ref: "Philippians 4:7"
  },
  // Day 159
  {
    ar: "أنا أمدك بالقوة لتواجه كل صعاب الحياة.",
    en: "I give you strength to face all life’s challenges.",
    ref: "Isaiah 40:31"
  },
  // Day 160
  {
    ar: "أنا أسمع كل صلواتك وأردها بالفرح والسلام.",
    en: "I hear all your prayers and answer with joy and peace.",
    ref: "Psalm 65:2"
  },
  // Day 161
  {
    ar: "أنا أرفع روحك عندما تشعر بالضعف وأقويك.",
    en: "I lift your spirit when you feel weak and strengthen you.",
    ref: "Isaiah 41:10"
  },
  // Day 162
  {
    ar: "أنا أُشعل قلبك بالرجاء والثقة في كل يوم.",
    en: "I kindle your heart with hope and trust every day.",
    ref: "Psalm 27:14"
  },
  // Day 163
  {
    ar: "أنا أُرشد خطواتك وأبعدك عن الشر.",
    en: "I guide your steps and keep you from evil.",
    ref: "Psalm 23:3"
  },
  // Day 164
  {
    ar: "أنا أملأ قلبك بالطمأنينة وسط القلق.",
    en: "I fill your heart with reassurance amid anxiety.",
    ref: "Philippians 4:6-7"
  },
  // Day 165
  {
    ar: "أنا أُعطيك قلبًا ثابتًا وسط العواصف.",
    en: "I give you a steadfast heart amidst storms.",
    ref: "Jeremiah 29:11"
  },
  // Day 166
  {
    ar: "أنا أرفعك وأمنحك الشجاعة لتواجه أي تحدي.",
    en: "I lift you and give you courage to face any challenge.",
    ref: "Deuteronomy 31:6"
  },
  // Day 167
  {
    ar: "أنا أملأ قلبك بالفرح والطمأنينة رغم الصعاب.",
    en: "I fill your heart with joy and reassurance despite hardships.",
    ref: "Psalm 16:11"
  },
  // Day 168
  {
    ar: "أنا أهدئ روحك وأملأها بالسلام والطمأنينة.",
    en: "I soothe your spirit and fill it with peace and reassurance.",
    ref: "Psalm 29:11"
  },
  // Day 169
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة في حياتك اليومية.",
    en: "I kindle your heart with hope and trust in daily life.",
    ref: "Lamentations 3:22-23"
  },
  // Day 170
  {
    ar: "أنا أرفع قلبك وأملأه بالفرح والسلام الداخلي.",
    en: "I lift your heart and fill it with joy and inner peace.",
    ref: "Psalm 16:11"
  },
  // Day 171
  {
    ar: "أنا أحبك بلا شروط وأقبلك كما أنت.",
    en: "I love you unconditionally and accept you as you are.",
    ref: "Romans 8:38-39"
  },
  // Day 172
  {
    ar: "أنا أمدك بالقوة لتتخطى كل خوف.",
    en: "I give you strength to overcome every fear.",
    ref: "Joshua 1:9"
  },
  // Day 173
  {
    ar: "أنا أرفع صوتك للسماء وأستجيب لك بمحبة.",
    en: "I lift your voice to heaven and answer you with love.",
    ref: "Psalm 65:2"
  },
  // Day 174
  {
    ar: "أنا أملأ قلبك بالطمأنينة والفرح في كل يوم.",
    en: "I fill your heart with reassurance and joy every day.",
    ref: "Psalm 16:11"
  },
  // Day 175
  {
    ar: "أنا أُشعل قلبك بالرجاء وسط الظلام.",
    en: "I kindle your heart with hope amid darkness.",
    ref: "Psalm 16:11"
  },
  // Day 176
  {
    ar: "أنا أرفع قلبك وأملأه بالشجاعة وسط المخاوف.",
    en: "I lift your heart and fill it with courage amid fears.",
    ref: "Deuteronomy 31:6"
  },
  // Day 177
  {
    ar: "أنا أضيء طريقك وأرشدك لكل خير.",
    en: "I light your path and guide you to all good.",
    ref: "Psalm 119:105"
  },
  // Day 178
  {
    ar: "أنا أملأ قلبك بالفرح والسلام رغم كل صعوبات الحياة.",
    en: "I fill your heart with joy and peace despite life’s hardships.",
    ref: "Romans 15:13"
  },
  // Day 179
  {
    ar: "أنا أُهديك قلبًا ثابتًا واثقًا في كل أمر.",
    en: "I give you a steadfast and confident heart in all things.",
    ref: "Psalm 112:7"
  },
  // Day 180
  {
    ar: "أنا أرفعك من كل سقوط وأقودك نحو النجاح.",
    en: "I lift you from every fall and lead you to success.",
    ref: "Psalm 37:24"
  },
  // Day 181
  {
    ar: "أنا أملأ حياتك بالنور والطمأنينة كل يوم.",
    en: "I fill your life with light and reassurance every day.",
    ref: "Psalm 119:105"
  },
  // Day 182
  {
    ar: "أنا أحبك وأحميك مهما كانت الظروف.",
    en: "I love you and protect you no matter the circumstances.",
    ref: "Romans 8:38-39"
  },
  // Day 183
  {
    ar: "أنا أمدك بالقوة لمواجهة أي تحدي بثقة.",
    en: "I give you strength to face any challenge with confidence.",
    ref: "Joshua 1:9"
  },
  // Day 184
  {
    ar: "أنا أرفع روحك وأملأه بالسلام العميق.",
    en: "I lift your spirit and fill it with deep peace.",
    ref: "Psalm 29:11"
  },
  // Day 185
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما حصل.",
    en: "I kindle your heart with hope and trust no matter what.",
    ref: "Lamentations 3:22-23"
  },
  // Day 186
  {
    ar: "أنا أهدئ قلبك حين يضطرب وأملأه بالطمأنينة.",
    en: "I calm your heart when it is troubled and fill it with reassurance.",
    ref: "John 14:27"
  },
  // Day 187
  {
    ar: "أنا أرفعك وأدفعك للأمام لأحقق لك الخير.",
    en: "I lift you and propel you forward to accomplish good.",
    ref: "Psalm 37:24"
  },
  // Day 188
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو النجاح.",
    en: "I light your path and guide your steps to success.",
    ref: "Psalm 119:105"
  },
  // Day 189
  {
    ar: "أنا أملأ قلبك بالفرح والسلام وسط التحديات.",
    en: "I fill your heart with joy and peace amid challenges.",
    ref: "Romans 15:13"
  },
  // Day 190
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا دائمًا.",
    en: "I give you a steadfast and confident heart always.",
    ref: "Psalm 112:7"
  },
  // Day 191
  {
    ar: "أنا أرفع قلبك وأملأه بالشجاعة وسط المخاوف.",
    en: "I lift your heart and fill it with courage amid fears.",
    ref: "Deuteronomy 31:6"
  },
  // Day 192
  {
    ar: "أنا أملأ حياتك بالنور والسلام كل يوم.",
    en: "I fill your life with light and peace every day.",
    ref: "Psalm 119:105"
  },
  // Day 193
  {
    ar: "أنا أحبك وأحميك مهما كانت الظروف.",
    en: "I love you and protect you no matter the circumstances.",
    ref: "Romans 8:38-39"
  },
  // Day 194
  {
    ar: "أنا أمدك بالقوة لتواجه أي تحدي بثقة.",
    en: "I give you strength to face any challenge with confidence.",
    ref: "Joshua 1:9"
  },
  // Day 195
  {
    ar: "أنا أرفع روحك وأملأه بالسلام العميق.",
    en: "I lift your spirit and fill it with deep peace.",
    ref: "Psalm 29:11"
  },
  // Day 196
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما حصل.",
    en: "I kindle your heart with hope and trust no matter what.",
    ref: "Lamentations 3:22-23"
  },
  // Day 197
  {
    ar: "أنا أهدئ قلبك حين يضطرب وأملأه بالطمأنينة.",
    en: "I calm your heart when it is troubled and fill it with reassurance.",
    ref: "John 14:27"
  },
  // Day 198
  {
    ar: "أنا أرفعك وأدفعك للأمام لأحقق لك الخير.",
    en: "I lift you and propel you forward to accomplish good.",
    ref: "Psalm 37:24"
  },
  // Day 199
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو النجاح.",
    en: "I light your path and guide your steps to success.",
    ref: "Psalm 119:105"
  },
  // Day 200
  {
    ar: "أنا أملأ قلبك بالفرح والسلام وسط التحديات اليومية.",
    en: "I fill your heart with joy and peace amid daily challenges.",
    ref: "Romans 15:13"
  },
    // Day 201
  {
    ar: "أنا أرفع قلبك وأملأه بالسلام وسط كل القلق.",
    en: "I lift your heart and fill it with peace amid all anxiety.",
    ref: "Philippians 4:6-7"
  },
  // Day 202
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما كانت الظروف.",
    en: "I kindle your heart with hope and trust no matter the circumstances.",
    ref: "Lamentations 3:22-23"
  },
  // Day 203
  {
    ar: "أنا أضيء دربك وأرشد خطواتك على الطريق المستقيم.",
    en: "I light your path and guide your steps on the right way.",
    ref: "Psalm 119:105"
  },
  // Day 204
  {
    ar: "أنا أرفعك من كل خوف وأعطيك الشجاعة.",
    en: "I lift you from all fear and give you courage.",
    ref: "Deuteronomy 31:6"
  },
  // Day 205
  {
    ar: "أنا أملأ قلبك بالفرح وسط كل صعوبات الحياة.",
    en: "I fill your heart with joy amid all life’s challenges.",
    ref: "Psalm 16:11"
  },
  // Day 206
  {
    ar: "أنا أحبك وأحميك بلا شروط.",
    en: "I love you and protect you unconditionally.",
    ref: "Romans 8:38-39"
  },
  // Day 207
  {
    ar: "أنا أمدك بالقوة لتواجه أي تحدي بثقة وإيمان.",
    en: "I give you strength to face any challenge with confidence and faith.",
    ref: "Joshua 1:9"
  },
  // Day 208
  {
    ar: "أنا أرفع روحك وأملأها بالطمأنينة والسلام.",
    en: "I lift your spirit and fill it with reassurance and peace.",
    ref: "Psalm 29:11"
  },
  // Day 209
  {
    ar: "أنا أُشعل قلبك بالرجاء وسط الظلام.",
    en: "I kindle your heart with hope amid darkness.",
    ref: "Psalm 16:11"
  },
  // Day 210
  {
    ar: "أنا أرفع قلبك وأملأه بالفرح والسلام الداخلي.",
    en: "I lift your heart and fill it with joy and inner peace.",
    ref: "Psalm 16:11"
  },
  // Day 211
  {
    ar: "أنا أُشبع روحك بالطمأنينة والسكينة.",
    en: "I satisfy your spirit with reassurance and calm.",
    ref: "Psalm 23:5"
  },
  // Day 212
  {
    ar: "أنا أحبك كما أنت وأستمر في حمايتك.",
    en: "I love you as you are and continue to protect you.",
    ref: "Romans 8:38-39"
  },
  // Day 213
  {
    ar: "أنا أملأ قلبك بالسلام وسط كل القلق والتوتر.",
    en: "I fill your heart with peace amid all worry and stress.",
    ref: "Philippians 4:7"
  },
  // Day 214
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا في كل الأمور.",
    en: "I give you a steadfast and confident heart in all matters.",
    ref: "Psalm 112:7"
  },
  // Day 215
  {
    ar: "أنا أرفعك وأدفعك للأمام لتحقيق الخير في حياتك.",
    en: "I lift you and propel you forward to accomplish good in your life.",
    ref: "Psalm 37:24"
  },
  // Day 216
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو النجاح والطمأنينة.",
    en: "I light your path and guide your steps toward success and reassurance.",
    ref: "Psalm 119:105"
  },
  // Day 217
  {
    ar: "أنا أملأ حياتك بالنور والطمأنينة والفرح كل يوم.",
    en: "I fill your life with light, reassurance, and joy every day.",
    ref: "Psalm 119:105"
  },
  // Day 218
  {
    ar: "أنا أحبك وأحميك مهما كانت الظروف حولك.",
    en: "I love you and protect you no matter the circumstances around you.",
    ref: "Romans 8:38-39"
  },
  // Day 219
  {
    ar: "أنا أمدك بالقوة لتتخطى أي خوف أو تحدي.",
    en: "I give you strength to overcome any fear or challenge.",
    ref: "Joshua 1:9"
  },
  // Day 220
  {
    ar: "أنا أرفع روحك وأملأها بالسلام العميق الذي يغمر قلبك.",
    en: "I lift your spirit and fill it with deep peace that overwhelms your heart.",
    ref: "Psalm 29:11"
  },
  // Day 221
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما واجهت.",
    en: "I kindle your heart with hope and trust no matter what you face.",
    ref: "Lamentations 3:22-23"
  },
  // Day 222
  {
    ar: "أنا أهدئ قلبك حين يضطرب وأملأه بالطمأنينة والسلام.",
    en: "I calm your heart when it is troubled and fill it with reassurance and peace.",
    ref: "John 14:27"
  },
  // Day 223
  {
    ar: "أنا أرفعك وأدفعك للأمام لأحقق لك الخير والنجاح.",
    en: "I lift you and propel you forward to accomplish good and success for you.",
    ref: "Psalm 37:24"
  },
  // Day 224
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو كل خير.",
    en: "I light your path and guide your steps toward all good.",
    ref: "Psalm 119:105"
  },
  // Day 225
  {
    ar: "أنا أملأ قلبك بالفرح والسلام وسط كل تحديات الحياة.",
    en: "I fill your heart with joy and peace amid all life’s challenges.",
    ref: "Romans 15:13"
  },
  // Day 226
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا في كل أمورك اليومية.",
    en: "I give you a steadfast and confident heart in all your daily matters.",
    ref: "Psalm 112:7"
  },
  // Day 227
  {
    ar: "أنا أرفع قلبك وأملأه بالشجاعة وسط كل خوف.",
    en: "I lift your heart and fill it with courage amid all fear.",
    ref: "Deuteronomy 31:6"
  },
  // Day 228
  {
    ar: "أنا أملأ حياتك بالنور والسلام والطمأنينة كل يوم.",
    en: "I fill your life with light, peace, and reassurance every day.",
    ref: "Psalm 119:105"
  },
  // Day 229
  {
    ar: "أنا أحبك وأحميك مهما حصل حولك.",
    en: "I love you and protect you no matter what happens around you.",
    ref: "Romans 8:38-39"
  },
  // Day 230
  {
    ar: "أنا أمدك بالقوة لتواجه أي تحدي بثقة وإيمان.",
    en: "I give you strength to face any challenge with confidence and faith.",
    ref: "Joshua 1:9"
  },
  // Day 231
  {
    ar: "أنا أرفع روحك وأملأه بالسلام العميق والطمأنينة.",
    en: "I lift your spirit and fill it with deep peace and reassurance.",
    ref: "Psalm 29:11"
  },
  // Day 232
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما كانت الظروف.",
    en: "I kindle your heart with hope and trust no matter the circumstances.",
    ref: "Lamentations 3:22-23"
  },
  // Day 233
  {
    ar: "أنا أهدئ قلبك وأملأه بالطمأنينة وسط كل القلق.",
    en: "I calm your heart and fill it with reassurance amid all anxiety.",
    ref: "John 14:27"
  },
  // Day 234
  {
    ar: "أنا أرفعك وأدفعك للأمام لأحقق لك الخير والنجاح.",
    en: "I lift you and propel you forward to accomplish good and success for you.",
    ref: "Psalm 37:24"
  },
  // Day 235
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو الخير والنجاح.",
    en: "I light your path and guide your steps toward good and success.",
    ref: "Psalm 119:105"
  },
  // Day 236
  {
    ar: "أنا أملأ قلبك بالفرح والسلام وسط كل تحديات الحياة.",
    en: "I fill your heart with joy and peace amid all life’s challenges.",
    ref: "Romans 15:13"
  },
  // Day 237
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا في كل أمور حياتك.",
    en: "I give you a steadfast and confident heart in all areas of your life.",
    ref: "Psalm 112:7"
  },
  // Day 238
  {
    ar: "أنا أرفع قلبك وأملأه بالشجاعة وسط أي خوف.",
    en: "I lift your heart and fill it with courage amid any fear.",
    ref: "Deuteronomy 31:6"
  },
  // Day 239
  {
    ar: "أنا أملأ حياتك بالنور والسلام والطمأنينة كل يوم.",
    en: "I fill your life with light, peace, and reassurance every day.",
    ref: "Psalm 119:105"
  },
  // Day 240
  {
    ar: "أنا أحبك وأحميك مهما كانت الظروف حولك.",
    en: "I love you and protect you no matter the circumstances around you.",
    ref: "Romans 8:38-39"
  },
  // Day 241
  {
    ar: "أنا أمدك بالقوة لتتخطى أي تحدي بثقة وإيمان.",
    en: "I give you strength to overcome any challenge with confidence and faith.",
    ref: "Joshua 1:9"
  },
  // Day 242
  {
    ar: "أنا أرفع روحك وأملأه بالسلام العميق والطمأنينة.",
    en: "I lift your spirit and fill it with deep peace and reassurance.",
    ref: "Psalm 29:11"
  },
  // Day 243
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما حصل.",
    en: "I kindle your heart with hope and trust no matter what happens.",
    ref: "Lamentations 3:22-23"
  },
  // Day 244
  {
    ar: "أنا أهدئ قلبك حين يضطرب وأملأه بالطمأنينة.",
    en: "I calm your heart when it is troubled and fill it with reassurance.",
    ref: "John 14:27"
  },
  // Day 245
  {
    ar: "أنا أرفعك وأدفعك للأمام لتحقيق كل الخير.",
    en: "I lift you and propel you forward to accomplish all good.",
    ref: "Psalm 37:24"
  },
  // Day 246
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو النجاح.",
    en: "I light your path and guide your steps toward success.",
    ref: "Psalm 119:105"
  },
  // Day 247
  {
    ar: "أنا أملأ قلبك بالفرح والسلام وسط تحديات الحياة.",
    en: "I fill your heart with joy and peace amid life’s challenges.",
    ref: "Romans 15:13"
  },
  // Day 248
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا في كل أمور حياتك.",
    en: "I give you a steadfast and confident heart in all aspects of your life.",
    ref: "Psalm 112:7"
  },
  // Day 249
  {
    ar: "أنا أرفع قلبك وأملأه بالشجاعة والثقة وسط أي خوف.",
    en: "I lift your heart and fill it with courage and confidence amid any fear.",
    ref: "Deuteronomy 31:6"
  },
  // Day 250
  {
    ar: "أنا أملأ حياتك بالنور والسلام والطمأنينة والفرح كل يوم.",
    en: "I fill your life with light, peace, reassurance, and joy every day.",
    ref: "Psalm 119:105"
  },
    // Day 251
  {
    ar: "أنا أرفع قلبك وأملأه بالسلام وسط القلق.",
    en: "I lift your heart and fill it with peace amid anxiety.",
    ref: "Philippians 4:6-7"
  },
  // Day 252
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما كانت الظروف.",
    en: "I kindle your heart with hope and trust no matter the circumstances.",
    ref: "Lamentations 3:22-23"
  },
  // Day 253
  {
    ar: "أنا أضيء دربك وأرشد خطواتك على الطريق المستقيم.",
    en: "I light your path and guide your steps on the right way.",
    ref: "Psalm 119:105"
  },
  // Day 254
  {
    ar: "أنا أرفعك من كل خوف وأعطيك الشجاعة.",
    en: "I lift you from all fear and give you courage.",
    ref: "Deuteronomy 31:6"
  },
  // Day 255
  {
    ar: "أنا أملأ قلبك بالفرح وسط كل صعوبات الحياة.",
    en: "I fill your heart with joy amid all life’s challenges.",
    ref: "Psalm 16:11"
  },
  // Day 256
  {
    ar: "أنا أحبك وأحميك بلا شروط.",
    en: "I love you and protect you unconditionally.",
    ref: "Romans 8:38-39"
  },
  // Day 257
  {
    ar: "أنا أمدك بالقوة لتواجه أي تحدي بثقة وإيمان.",
    en: "I give you strength to face any challenge with confidence and faith.",
    ref: "Joshua 1:9"
  },
  // Day 258
  {
    ar: "أنا أرفع روحك وأملأها بالطمأنينة والسلام.",
    en: "I lift your spirit and fill it with reassurance and peace.",
    ref: "Psalm 29:11"
  },
  // Day 259
  {
    ar: "أنا أُشعل قلبك بالرجاء وسط الظلام.",
    en: "I kindle your heart with hope amid darkness.",
    ref: "Psalm 16:11"
  },
  // Day 260
  {
    ar: "أنا أرفع قلبك وأملأه بالفرح والسلام الداخلي.",
    en: "I lift your heart and fill it with joy and inner peace.",
    ref: "Psalm 16:11"
  },
  // Day 261
  {
    ar: "أنا أُشبع روحك بالطمأنينة والسكينة.",
    en: "I satisfy your spirit with reassurance and calm.",
    ref: "Psalm 23:5"
  },
  // Day 262
  {
    ar: "أنا أحبك كما أنت وأستمر في حمايتك.",
    en: "I love you as you are and continue to protect you.",
    ref: "Romans 8:38-39"
  },
  // Day 263
  {
    ar: "أنا أملأ قلبك بالسلام وسط كل القلق والتوتر.",
    en: "I fill your heart with peace amid all worry and stress.",
    ref: "Philippians 4:7"
  },
  // Day 264
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا في كل الأمور.",
    en: "I give you a steadfast and confident heart in all matters.",
    ref: "Psalm 112:7"
  },
  // Day 265
  {
    ar: "أنا أرفعك وأدفعك للأمام لتحقيق الخير في حياتك.",
    en: "I lift you and propel you forward to accomplish good in your life.",
    ref: "Psalm 37:24"
  },
  // Day 266
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو النجاح والطمأنينة.",
    en: "I light your path and guide your steps toward success and reassurance.",
    ref: "Psalm 119:105"
  },
  // Day 267
  {
    ar: "أنا أملأ حياتك بالنور والطمأنينة والفرح كل يوم.",
    en: "I fill your life with light, reassurance, and joy every day.",
    ref: "Psalm 119:105"
  },
  // Day 268
  {
    ar: "أنا أحبك وأحميك مهما كانت الظروف حولك.",
    en: "I love you and protect you no matter the circumstances around you.",
    ref: "Romans 8:38-39"
  },
  // Day 269
  {
    ar: "أنا أمدك بالقوة لتتخطى أي خوف أو تحدي.",
    en: "I give you strength to overcome any fear or challenge.",
    ref: "Joshua 1:9"
  },
  // Day 270
  {
    ar: "أنا أرفع روحك وأملأه بالسلام العميق الذي يغمر قلبك.",
    en: "I lift your spirit and fill it with deep peace that overwhelms your heart.",
    ref: "Psalm 29:11"
  },
  // Day 271
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما واجهت.",
    en: "I kindle your heart with hope and trust no matter what you face.",
    ref: "Lamentations 3:22-23"
  },
  // Day 272
  {
    ar: "أنا أهدئ قلبك حين يضطرب وأملأه بالطمأنينة والسلام.",
    en: "I calm your heart when it is troubled and fill it with reassurance and peace.",
    ref: "John 14:27"
  },
  // Day 273
  {
    ar: "أنا أرفعك وأدفعك للأمام لأحقق لك الخير والنجاح.",
    en: "I lift you and propel you forward to accomplish good and success for you.",
    ref: "Psalm 37:24"
  },
  // Day 274
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو كل خير.",
    en: "I light your path and guide your steps toward all good.",
    ref: "Psalm 119:105"
  },
  // Day 275
  {
    ar: "أنا أملأ قلبك بالفرح والسلام وسط كل تحديات الحياة.",
    en: "I fill your heart with joy and peace amid life’s challenges.",
    ref: "Romans 15:13"
  },
  // Day 276
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا في كل أمور حياتك.",
    en: "I give you a steadfast and confident heart in all areas of your life.",
    ref: "Psalm 112:7"
  },
  // Day 277
  {
    ar: "أنا أرفع قلبك وأملأه بالشجاعة وسط أي خوف.",
    en: "I lift your heart and fill it with courage amid any fear.",
    ref: "Deuteronomy 31:6"
  },
  // Day 278
  {
    ar: "أنا أملأ حياتك بالنور والسلام والطمأنينة كل يوم.",
    en: "I fill your life with light, peace, and reassurance every day.",
    ref: "Psalm 119:105"
  },
  // Day 279
  {
    ar: "أنا أحبك وأحميك مهما كانت الظروف حولك.",
    en: "I love you and protect you no matter the circumstances around you.",
    ref: "Romans 8:38-39"
  },
  // Day 280
  {
    ar: "أنا أمدك بالقوة لتتخطى أي تحدي بثقة وإيمان.",
    en: "I give you strength to overcome any challenge with confidence and faith.",
    ref: "Joshua 1:9"
  },
  // Day 281
  {
    ar: "أنا أرفع روحك وأملأه بالسلام العميق والطمأنينة.",
    en: "I lift your spirit and fill it with deep peace and reassurance.",
    ref: "Psalm 29:11"
  },
  // Day 282
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما حصل.",
    en: "I kindle your heart with hope and trust no matter what happens.",
    ref: "Lamentations 3:22-23"
  },
  // Day 283
  {
    ar: "أنا أهدئ قلبك وأملأه بالطمأنينة وسط كل القلق.",
    en: "I calm your heart and fill it with reassurance amid all anxiety.",
    ref: "John 14:27"
  },
  // Day 284
  {
    ar: "أنا أرفعك وأدفعك للأمام لأحقق كل الخير.",
    en: "I lift you and propel you forward to accomplish all good.",
    ref: "Psalm 37:24"
  },
  // Day 285
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو النجاح.",
    en: "I light your path and guide your steps toward success.",
    ref: "Psalm 119:105"
  },
  // Day 286
  {
    ar: "أنا أملأ قلبك بالفرح والسلام وسط تحديات الحياة.",
    en: "I fill your heart with joy and peace amid life’s challenges.",
    ref: "Romans 15:13"
  },
  // Day 287
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا في كل أمور حياتك.",
    en: "I give you a steadfast and confident heart in all aspects of your life.",
    ref: "Psalm 112:7"
  },
  // Day 288
  {
    ar: "أنا أرفع قلبك وأملأه بالشجاعة والثقة وسط أي خوف.",
    en: "I lift your heart and fill it with courage and confidence amid any fear.",
    ref: "Deuteronomy 31:6"
  },
  // Day 289
  {
    ar: "أنا أملأ حياتك بالنور والسلام والطمأنينة والفرح كل يوم.",
    en: "I fill your life with light, peace, reassurance, and joy every day.",
    ref: "Psalm 119:105"
  },
  // Day 290
  {
    ar: "أنا أحبك وأحميك مهما كانت الظروف حولك.",
    en: "I love you and protect you no matter the circumstances around you.",
    ref: "Romans 8:38-39"
  },
  // Day 291
  {
    ar: "أنا أمدك بالقوة لتتخطى أي تحدي بثقة وإيمان.",
    en: "I give you strength to overcome any challenge with confidence and faith.",
    ref: "Joshua 1:9"
  },
  // Day 292
  {
    ar: "أنا أرفع روحك وأملأه بالسلام العميق والطمأنينة.",
    en: "I lift your spirit and fill it with deep peace and reassurance.",
    ref: "Psalm 29:11"
  },
  // Day 293
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما حصل.",
    en: "I kindle your heart with hope and trust no matter what happens.",
    ref: "Lamentations 3:22-23"
  },
  // Day 294
  {
    ar: "أنا أهدئ قلبك حين يضطرب وأملأه بالطمأنينة.",
    en: "I calm your heart when it is troubled and fill it with reassurance.",
    ref: "John 14:27"
  },
  // Day 295
  {
    ar: "أنا أرفعك وأدفعك للأمام لتحقيق كل الخير.",
    en: "I lift you and propel you forward to accomplish all good.",
    ref: "Psalm 37:24"
  },
  // Day 296
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو النجاح.",
    en: "I light your path and guide your steps toward success.",
    ref: "Psalm 119:105"
  },
  // Day 297
  {
    ar: "أنا أملأ قلبك بالفرح والسلام وسط كل تحديات الحياة.",
    en: "I fill your heart with joy and peace amid life’s challenges.",
    ref: "Romans 15:13"
  },
  // Day 298
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا في كل أمور حياتك.",
    en: "I give you a steadfast and confident heart in all aspects of your life.",
    ref: "Psalm 112:7"
  },
  // Day 299
  {
    ar: "أنا أرفع قلبك وأملأه بالشجاعة والثقة وسط أي خوف.",
    en: "I lift your heart and fill it with courage and confidence amid any fear.",
    ref: "Deuteronomy 31:6"
  },
  // Day 300
  {
    ar: "أنا أملأ حياتك بالنور والسلام والطمأنينة والفرح كل يوم.",
    en: "I fill your life with light, peace, reassurance, and joy every day.",
    ref: "Psalm 119:105"
  },
    // Day 301
  {
    ar: "أنا أرفع قلبك وأملأه بالسلام وسط كل القلق.",
    en: "I lift your heart and fill it with peace amid all anxiety.",
    ref: "Philippians 4:6-7"
  },
  // Day 302
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما كانت الظروف.",
    en: "I kindle your heart with hope and trust no matter the circumstances.",
    ref: "Lamentations 3:22-23"
  },
  // Day 303
  {
    ar: "أنا أضيء دربك وأرشد خطواتك على الطريق المستقيم.",
    en: "I light your path and guide your steps on the right way.",
    ref: "Psalm 119:105"
  },
  // Day 304
  {
    ar: "أنا أرفعك من كل خوف وأعطيك الشجاعة.",
    en: "I lift you from all fear and give you courage.",
    ref: "Deuteronomy 31:6"
  },
  // Day 305
  {
    ar: "أنا أملأ قلبك بالفرح وسط كل صعوبات الحياة.",
    en: "I fill your heart with joy amid all life’s challenges.",
    ref: "Psalm 16:11"
  },
  // Day 306
  {
    ar: "أنا أحبك وأحميك بلا شروط.",
    en: "I love you and protect you unconditionally.",
    ref: "Romans 8:38-39"
  },
  // Day 307
  {
    ar: "أنا أمدك بالقوة لتواجه أي تحدي بثقة وإيمان.",
    en: "I give you strength to face any challenge with confidence and faith.",
    ref: "Joshua 1:9"
  },
  // Day 308
  {
    ar: "أنا أرفع روحك وأملأها بالطمأنينة والسلام.",
    en: "I lift your spirit and fill it with reassurance and peace.",
    ref: "Psalm 29:11"
  },
  // Day 309
  {
    ar: "أنا أُشعل قلبك بالرجاء وسط الظلام.",
    en: "I kindle your heart with hope amid darkness.",
    ref: "Psalm 16:11"
  },
  // Day 310
  {
    ar: "أنا أرفع قلبك وأملأه بالفرح والسلام الداخلي.",
    en: "I lift your heart and fill it with joy and inner peace.",
    ref: "Psalm 16:11"
  },
  // Day 311
  {
    ar: "أنا أُشبع روحك بالطمأنينة والسكينة.",
    en: "I satisfy your spirit with reassurance and calm.",
    ref: "Psalm 23:5"
  },
  // Day 312
  {
    ar: "أنا أحبك كما أنت وأستمر في حمايتك.",
    en: "I love you as you are and continue to protect you.",
    ref: "Romans 8:38-39"
  },
  // Day 313
  {
    ar: "أنا أملأ قلبك بالسلام وسط كل القلق والتوتر.",
    en: "I fill your heart with peace amid all worry and stress.",
    ref: "Philippians 4:7"
  },
  // Day 314
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا في كل الأمور.",
    en: "I give you a steadfast and confident heart in all matters.",
    ref: "Psalm 112:7"
  },
  // Day 315
  {
    ar: "أنا أرفعك وأدفعك للأمام لتحقيق الخير في حياتك.",
    en: "I lift you and propel you forward to accomplish good in your life.",
    ref: "Psalm 37:24"
  },
  // Day 316
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو النجاح والطمأنينة.",
    en: "I light your path and guide your steps toward success and reassurance.",
    ref: "Psalm 119:105"
  },
  // Day 317
  {
    ar: "أنا أملأ حياتك بالنور والطمأنينة والفرح كل يوم.",
    en: "I fill your life with light, reassurance, and joy every day.",
    ref: "Psalm 119:105"
  },
  // Day 318
  {
    ar: "أنا أحبك وأحميك مهما كانت الظروف حولك.",
    en: "I love you and protect you no matter the circumstances around you.",
    ref: "Romans 8:38-39"
  },
  // Day 319
  {
    ar: "أنا أمدك بالقوة لتتخطى أي خوف أو تحدي.",
    en: "I give you strength to overcome any fear or challenge.",
    ref: "Joshua 1:9"
  },
  // Day 320
  {
    ar: "أنا أرفع روحك وأملأه بالسلام العميق الذي يغمر قلبك.",
    en: "I lift your spirit and fill it with deep peace that overwhelms your heart.",
    ref: "Psalm 29:11"
  },
  // Day 321
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما واجهت.",
    en: "I kindle your heart with hope and trust no matter what you face.",
    ref: "Lamentations 3:22-23"
  },
  // Day 322
  {
    ar: "أنا أهدئ قلبك حين يضطرب وأملأه بالطمأنينة والسلام.",
    en: "I calm your heart when it is troubled and fill it with reassurance and peace.",
    ref: "John 14:27"
  },
  // Day 323
  {
    ar: "أنا أرفعك وأدفعك للأمام لأحقق لك الخير والنجاح.",
    en: "I lift you and propel you forward to accomplish good and success for you.",
    ref: "Psalm 37:24"
  },
  // Day 324
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو كل خير.",
    en: "I light your path and guide your steps toward all good.",
    ref: "Psalm 119:105"
  },
  // Day 325
  {
    ar: "أنا أملأ قلبك بالفرح والسلام وسط كل تحديات الحياة.",
    en: "I fill your heart with joy and peace amid life’s challenges.",
    ref: "Romans 15:13"
  },
  // Day 326
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا في كل أمور حياتك.",
    en: "I give you a steadfast and confident heart in all areas of your life.",
    ref: "Psalm 112:7"
  },
  // Day 327
  {
    ar: "أنا أرفع قلبك وأملأه بالشجاعة وسط أي خوف.",
    en: "I lift your heart and fill it with courage amid any fear.",
    ref: "Deuteronomy 31:6"
  },
  // Day 328
  {
    ar: "أنا أملأ حياتك بالنور والسلام والطمأنينة كل يوم.",
    en: "I fill your life with light, peace, and reassurance every day.",
    ref: "Psalm 119:105"
  },
  // Day 329
  {
    ar: "أنا أحبك وأحميك مهما كانت الظروف حولك.",
    en: "I love you and protect you no matter the circumstances around you.",
    ref: "Romans 8:38-39"
  },
  // Day 330
  {
    ar: "أنا أمدك بالقوة لتتخطى أي تحدي بثقة وإيمان.",
    en: "I give you strength to overcome any challenge with confidence and faith.",
    ref: "Joshua 1:9"
  },
  // Day 331
  {
    ar: "أنا أرفع روحك وأملأه بالسلام العميق والطمأنينة.",
    en: "I lift your spirit and fill it with deep peace and reassurance.",
    ref: "Psalm 29:11"
  },
  // Day 332
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما حصل.",
    en: "I kindle your heart with hope and trust no matter what happens.",
    ref: "Lamentations 3:22-23"
  },
  // Day 333
  {
    ar: "أنا أهدئ قلبك وأملأه بالطمأنينة وسط كل القلق.",
    en: "I calm your heart and fill it with reassurance amid all anxiety.",
    ref: "John 14:27"
  },
  // Day 334
  {
    ar: "أنا أرفعك وأدفعك للأمام لأحقق كل الخير.",
    en: "I lift you and propel you forward to accomplish all good.",
    ref: "Psalm 37:24"
  },
  // Day 335
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو النجاح.",
    en: "I light your path and guide your steps toward success.",
    ref: "Psalm 119:105"
  },
  // Day 336
  {
    ar: "أنا أملأ قلبك بالفرح والسلام وسط كل تحديات الحياة.",
    en: "I fill your heart with joy and peace amid life’s challenges.",
    ref: "Romans 15:13"
  },
  // Day 337
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا في كل أمور حياتك.",
    en: "I give you a steadfast and confident heart in all aspects of your life.",
    ref: "Psalm 112:7"
  },
  // Day 338
  {
    ar: "أنا أرفع قلبك وأملأه بالشجاعة والثقة وسط أي خوف.",
    en: "I lift your heart and fill it with courage and confidence amid any fear.",
    ref: "Deuteronomy 31:6"
  },
  // Day 339
  {
    ar: "أنا أملأ حياتك بالنور والسلام والطمأنينة والفرح كل يوم.",
    en: "I fill your life with light, peace, reassurance, and joy every day.",
    ref: "Psalm 119:105"
  },
  // Day 340
  {
    ar: "أنا أحبك وأحميك مهما كانت الظروف حولك.",
    en: "I love you and protect you no matter the circumstances around you.",
    ref: "Romans 8:38-39"
  },
  // Day 341
  {
    ar: "أنا أمدك بالقوة لتتخطى أي تحدي بثقة وإيمان.",
    en: "I give you strength to overcome any challenge with confidence and faith.",
    ref: "Joshua 1:9"
  },
  // Day 342
  {
    ar: "أنا أرفع روحك وأملأه بالسلام العميق والطمأنينة.",
    en: "I lift your spirit and fill it with deep peace and reassurance.",
    ref: "Psalm 29:11"
  },
  // Day 343
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما حصل.",
    en: "I kindle your heart with hope and trust no matter what happens.",
    ref: "Lamentations 3:22-23"
  },
  // Day 344
  {
    ar: "أنا أهدئ قلبك حين يضطرب وأملأه بالطمأنينة.",
    en: "I calm your heart when it is troubled and fill it with reassurance.",
    ref: "John 14:27"
  },
  // Day 345
  {
    ar: "أنا أرفعك وأدفعك للأمام لتحقيق كل الخير.",
    en: "I lift you and propel you forward to accomplish all good.",
    ref: "Psalm 37:24"
  },
  // Day 346
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو النجاح.",
    en: "I light your path and guide your steps toward success.",
    ref: "Psalm 119:105"
  },
  // Day 347
  {
    ar: "أنا أملأ قلبك بالفرح والسلام وسط كل تحديات الحياة.",
    en: "I fill your heart with joy and peace amid life’s challenges.",
    ref: "Romans 15:13"
  },
  // Day 348
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا في كل أمور حياتك.",
    en: "I give you a steadfast and confident heart in all aspects of your life.",
    ref: "Psalm 112:7"
  },
  // Day 349
  {
    ar: "أنا أرفع قلبك وأملأه بالشجاعة والثقة وسط أي خوف.",
    en: "I lift your heart and fill it with courage and confidence amid any fear.",
    ref: "Deuteronomy 31:6"
  },
  // Day 350
  {
    ar: "أنا أملأ حياتك بالنور والسلام والطمأنينة والفرح كل يوم.",
    en: "I fill your life with light, peace, reassurance, and joy every day.",
    ref: "Psalm 119:105"
  },
  // Day 351
  {
    ar: "أنا أحبك وأحميك مهما كانت الظروف حولك.",
    en: "I love you and protect you no matter the circumstances around you.",
    ref: "Romans 8:38-39"
  },
  // Day 352
  {
    ar: "أنا أمدك بالقوة لتتخطى أي تحدي بثقة وإيمان.",
    en: "I give you strength to overcome any challenge with confidence and faith.",
    ref: "Joshua 1:9"
  },
  // Day 353
  {
    ar: "أنا أرفع روحك وأملأه بالسلام العميق والطمأنينة.",
    en: "I lift your spirit and fill it with deep peace and reassurance.",
    ref: "Psalm 29:11"
  },
  // Day 354
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما حصل.",
    en: "I kindle your heart with hope and trust no matter what happens.",
    ref: "Lamentations 3:22-23"
  },
  // Day 355
  {
    ar: "أنا أهدئ قلبك حين يضطرب وأملأه بالطمأنينة.",
    en: "I calm your heart when it is troubled and fill it with reassurance.",
    ref: "John 14:27"
  },
  // Day 356
  {
    ar: "أنا أرفعك وأدفعك للأمام لتحقيق كل الخير.",
    en: "I lift you and propel you forward to accomplish all good.",
    ref: "Psalm 37:24"
  },
  // Day 357
  {
    ar: "أنا أضيء طريقك وأرشد خطواتك نحو النجاح.",
    en: "I light your path and guide your steps toward success.",
    ref: "Psalm 119:105"
  },
  // Day 358
  {
    ar: "أنا أملأ قلبك بالفرح والسلام وسط كل تحديات الحياة.",
    en: "I fill your heart with joy and peace amid life’s challenges.",
    ref: "Romans 15:13"
  },
  // Day 359
  {
    ar: "أنا أُعطيك قلبًا ثابتًا واثقًا في كل أمور حياتك.",
    en: "I give you a steadfast and confident heart in all aspects of your life.",
    ref: "Psalm 112:7"
  },
  // Day 360
  {
    ar: "أنا أرفع قلبك وأملأه بالشجاعة والثقة وسط أي خوف.",
    en: "I lift your heart and fill it with courage and confidence amid any fear.",
    ref: "Deuteronomy 31:6"
  },
  // Day 361
  {
    ar: "أنا أملأ حياتك بالنور والسلام والطمأنينة والفرح كل يوم.",
    en: "I fill your life with light, peace, reassurance, and joy every day.",
    ref: "Psalm 119:105"
  },
  // Day 362
  {
    ar: "أنا أحبك وأحميك مهما كانت الظروف حولك.",
    en: "I love you and protect you no matter the circumstances around you.",
    ref: "Romans 8:38-39"
  },
  // Day 363
  {
    ar: "أنا أمدك بالقوة لتتخطى أي تحدي بثقة وإيمان.",
    en: "I give you strength to overcome any challenge with confidence and faith.",
    ref: "Joshua 1:9"
  },
  // Day 364
  {
    ar: "أنا أرفع روحك وأملأه بالسلام العميق والطمأنينة.",
    en: "I lift your spirit and fill it with deep peace and reassurance.",
    ref: "Psalm 29:11"
  },
  // Day 365
  {
    ar: "أنا أُشعل قلبك بالأمل والثقة مهما حصل.",
    en: "I kindle your heart with hope and trust no matter what happens.",
    ref: "Lamentations 3:22-23"
  }
];


