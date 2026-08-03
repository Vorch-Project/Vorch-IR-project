const multiCases = [
  {
    title: "Two Anime Girls + Courtyard",
    video: "assets/multi/fuse-1_000000.mp4",
    poster: "assets/multi/fuse-1_000000_poster.jpg",
    subjects: 2,
    refs: [
      "assets/multi/fuse-1_000000_ref1.png",
      "assets/multi/fuse-1_000000_ref2.png",
      "assets/multi/fuse-1_000000_bg.png",
    ],
    text: "Reference 1 replaces the youth on the left (red robe, high bun); reference 2 replaces the older woman on the right (dark-blue robe, grey coiled hair); reference 3 replaces the background. Ref 1: a chibi-style pink short-hair girl with a pale-pink halo, white fluffy coat and navy pleated skirt. Ref 2: a chibi-style silver long-hair girl with beast ears and a pale-blue halo, black suit over a blue-tie shirt. Ref 3: a bright modern Chinese courtyard with a red-pillar pavilion.",
  },
  {
    title: "Two Tactical Girls + Garden Corridor",
    video: "assets/multi/fuse-1_000005.mp4",
    poster: "assets/multi/fuse-1_000005_poster.jpg",
    subjects: 2,
    refs: [
      "assets/multi/fuse-1_000005_ref1.png",
      "assets/multi/fuse-1_000005_ref2.png",
      "assets/multi/fuse-1_000005_bg.png",
    ],
    text: "Reference 1 replaces the young woman on the left (gold ornate costume, gold headpiece); reference 2 replaces the older woman on the right (dark-red embroidered costume, tall bun); reference 3 replaces the background. Ref 1: a chibi-style woman with auburn wavy hair, a bandage on her face, dark-green tactical vest. Ref 2: a chibi-style woman with black short hair, tactical goggles, holding a black rifle. Ref 3: a quiet classical Chinese garden corridor with wooden pillars and bamboo.",
  },
  {
    title: "Girl + Classical Garden",
    video: "assets/multi/fuse-2_000066.mp4",
    poster: "assets/multi/fuse-2_000066_poster.jpg",
    subjects: 1,
    refs: [
      "assets/multi/fuse-2_000066_ref1.png",
      "assets/multi/fuse-2_000066_bg.png",
    ],
    text: "Reference 1 replaces the green-haired girl in the video; reference 2 replaces the background. Ref 1 is a black-haired girl; ref 2 is a classical-style garden.",
  },
  {
    title: "Two Women + Coral Seabed",
    video: "assets/multi/fuse-long-v5_000006.mp4",
    poster: "assets/multi/fuse-long-v5_000006_poster.jpg",
    subjects: 2,
    refs: [
      "assets/multi/fuse-long-v5_000006_ref1.png",
      "assets/multi/fuse-long-v5_000006_ref2.png",
      "assets/multi/fuse-long-v5_000006_bg.png",
    ],
    text: "Reference 1 replaces the man on the left (black uniform jacket, white shirt, short cropped hair); reference 2 replaces the man on the right (black uniform, white crew shirt, straight short hair); reference 3 replaces the background. Ref 1: a woman with a black blunt-fringe bob in a cream tee. Ref 2: a woman with black wavy long hair in a fitted cream tank. Ref 3: a bright shallow coral seabed with tropical fish.",
  },
  {
    title: "Two Men + Hotel Lobby",
    video: "assets/multi/fuse-long-v5_000007_v2.mp4",
    poster: "assets/multi/fuse-long-v5_000007_v2_poster.jpg",
    subjects: 2,
    refs: [
      "assets/multi/fuse-long-v5_000007_ref1.png",
      "assets/multi/fuse-long-v5_000007_ref2.png",
      "assets/multi/fuse-long-v5_000007_bg.png",
    ],
    text: "Reference 1 replaces the woman on the left (white tee, black ear-length bob, talking animatedly); reference 2 replaces the woman on the right (white camisole, dark-brown long curls, listening); reference 3 replaces the background. Ref 1: a young man with a black blunt-fringe bob, white collared shirt under a black suit. Ref 2: a young man with a soft black bob, white tee under a black stand-collar coat. Ref 3: a luxurious modern hotel lobby with grey sofas and a ring chandelier.",
  },
  {
    title: "Swordswoman & Cloaked Man (subjects only)",
    video: "assets/multi/fuse-long-v5_000013.mp4",
    poster: "assets/multi/fuse-long-v5_000013_poster.jpg",
    subjects: 2,
    refs: [
      "assets/multi/fuse-long-v5_000013_ref1.png",
      "assets/multi/fuse-long-v5_000013_ref2.png",
    ],
    text: "Reference 1 replaces the woman in the white robe holding a sword; reference 2 replaces the man in the black cloak and bamboo hat. Ref 1: a woman with light-purple short hair, black crew top under a white lapel jacket, olive cargo skirt. Ref 2: a man with golden mid-length hair, black mesh top under a blue baseball jacket, loose white trousers.",
  },
  {
    title: "Witch & Boy (subjects only)",
    video: "assets/multi/fuse-long-v5_000056.mp4",
    poster: "assets/multi/fuse-long-v5_000056_poster.jpg",
    subjects: 2,
    refs: [
      "assets/multi/fuse-long-v5_000056_ref1.png",
      "assets/multi/fuse-long-v5_000056_ref2.png",
    ],
    text: "Reference 1 replaces the man on the left (white robe, high ponytail, carrying a guqin); reference 2 replaces the woman on the right (red outer robe, white gauze hat). Ref 1: a cartoon witch with silver curly twin-tails and a black pointed hat, spiral-pattern black dress. Ref 2: a melancholy young boy with short brown hair, striped top and blue overalls under a black cloak, holding a jack-o'-lantern.",
  },
  {
    title: "Ballerina & Officer (subjects only)",
    video: "assets/multi/fuse-long-v5_000018.mp4",
    poster: "assets/multi/fuse-long-v5_000018_poster.jpg",
    subjects: 2,
    refs: [
      "assets/multi/fuse-long-v5_000018_ref1.png",
      "assets/multi/fuse-long-v5_000018_ref2.png",
    ],
    text: "Reference 1 replaces the ballerina (light-grey skirt, white lapel top, auburn long hair); reference 2 replaces the man in the olive-green greatcoat and dark military cap. Ref 1: a middle-aged woman with a swept-back hairstyle, dark-brown textured knit and matching work apron. Ref 2: a short-haired middle-aged man in a black shirt under an olive-green stand-collar jacket with black fur trim.",
  },
];

const longCases = [
  {
    title: "Two Dancers + Scene",
    video: "assets/multi/case1.mp4",
    poster: "assets/multi/case1_poster.jpg",
    subjects: 2,
    duration: "24s",
    refs: [
      "assets/multi/case1_ref1.png",
      "assets/multi/case1_ref2.png",
      "assets/multi/case1_ref3.png",
    ],
    text: "Reference 1 replaces the male dancer in the white suit; reference 2 replaces the female dancer in the white dress; reference 3 replaces the background. Ref 1: a young woman with long red braided hair, white sailor-collar top and light-grey midi skirt. Ref 2: a figure in a dark olive military greatcoat, matching cap and dark scarf. Ref 3: a sunny park lawn full of flowers with a black ladder by a grey post, lush woods and blue sky.",
  },
  {
    title: "Minute-Long · Two Subjects",
    video: "assets/long/long_01_remove.mp4",
    poster: "assets/long/long_01_remove_poster.jpg",
    subjects: 2,
    duration: "2min 39s",
    refs: ["assets/long/long_01_ref1.png", "assets/long/long_01_ref2.png"],
    text: "Reference 1 replaces the woman on the right (long dark wavy hair, dark round-neck top); reference 2 replaces the man on the left (short hair, dark-grey polo). Reference 1 is a young Asian woman with black blunt-fringe short hair in a white round-neck tee; reference 2 is a Caucasian man in a light-grey newsboy cap and a light-blue vintage suit.",
  },
  {
    title: "Minute-Long · Two Dancers",
    video: "assets/long/long_02.mp4",
    poster: "assets/long/long_02_poster.jpg",
    subjects: 2,
    duration: "1min 58s",
    refs: ["assets/long/long_02_ref1.png", "assets/long/long_02_ref2.png"],
    text: "Reference 1 replaces the male dancer on the right (dark tailcoat suit); reference 2 replaces the female dancer on the left (black-and-white patterned dress). Reference 1 is a young man with side-parted black hair and a striking white forelock, in a black Chinese-collar long coat with a silver pocket-watch chain; reference 2 is a blonde woman with a sharp shoulder-length bob, in a light-yellow tee and a vivid rainbow tassel skirt.",
  },
];

function createVideo(src, poster) {
  const video = document.createElement("video");
  video.src = src;
  if (poster) video.poster = poster;
  video.controls = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = "metadata";
  return video;
}

function getDrivingVideo(src) {
  return src.replace(/\.mp4$/, "_driving.mp4");
}

function getDrivingPoster(src) {
  return src.replace(/\.mp4$/, "_driving_poster.jpg");
}

function createVideoBlock(label, src, poster) {
  const figure = document.createElement("figure");
  figure.className = "demo-video-block";

  const caption = document.createElement("figcaption");
  caption.textContent = label;

  const media = document.createElement("div");
  media.className = "demo-media";
  media.appendChild(createVideo(src, poster));

  figure.append(caption, media);
  return figure;
}

function createPromptRow(label, node) {
  const row = document.createElement("div");
  row.className = "prompt-row";

  const promptLabel = document.createElement("div");
  promptLabel.className = "prompt-label";
  promptLabel.textContent = label;

  row.append(promptLabel, node);
  return row;
}

function renderRefs(paths) {
  const refs = document.createElement("div");
  refs.className = "ref-strip";

  paths.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Reference image";
    img.loading = "lazy";
    refs.appendChild(img);
  });

  return refs;
}

function createSyncPlayButton(videoPair) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "sync-play-button";
  button.setAttribute("aria-label", "Play video prompt and result together");

  const icon = document.createElement("span");
  icon.className = "sync-play-icon";

  const label = document.createElement("span");
  label.className = "sync-play-label";
  label.textContent = "Play Both";

  button.append(icon, label);

  button.addEventListener("click", async () => {
    const videos = Array.from(videoPair.querySelectorAll("video"));
    const isPlaying = videos.some((video) => !video.paused && !video.ended);

    if (isPlaying) {
      videos.forEach((video) => video.pause());
      button.classList.remove("is-playing");
      label.textContent = "Play Both";
      button.setAttribute("aria-label", "Play video prompt and result together");
      return;
    }

    videos.forEach((video) => {
      video.muted = true;
      try {
        video.currentTime = 0;
      } catch {
        // Some browsers reject seeking before metadata is ready.
      }
    });

    try {
      await Promise.all(videos.map((video) => video.play()));
      button.classList.add("is-playing");
      label.textContent = "Pause Both";
      button.setAttribute("aria-label", "Pause video prompt and result together");
    } catch {
      videos.forEach((video) => video.pause());
      button.classList.remove("is-playing");
      label.textContent = "Play Both";
      button.setAttribute("aria-label", "Play video prompt and result together");
    }
  });

  return button;
}

function renderCaseCard(item) {
  const card = document.createElement("article");
  card.className = "demo-card";

  const videoPair = document.createElement("div");
  videoPair.className = "demo-video-pair";
  videoPair.append(
    createVideoBlock("Video prompt", getDrivingVideo(item.video), getDrivingPoster(item.video)),
    createVideoBlock("Result", item.video, item.poster),
  );

  const videoToolbar = document.createElement("div");
  videoToolbar.className = "video-pair-toolbar";
  videoToolbar.appendChild(createSyncPlayButton(videoPair));

  const meta = document.createElement("div");
  meta.className = "demo-card-meta";

  const heading = document.createElement("div");
  heading.className = "case-heading";

  const title = document.createElement("h4");
  title.textContent = item.title;

  heading.appendChild(title);

  const promptText = document.createElement("p");
  promptText.className = "prompt-text";
  promptText.textContent = item.text;

  const prompts = document.createElement("div");
  prompts.className = "prompt-panel";
  prompts.append(
    createPromptRow("Text prompt", promptText),
    createPromptRow("Image prompt", renderRefs(item.refs)),
  );

  meta.append(heading, prompts);
  card.append(videoToolbar, videoPair, meta);
  return card;
}

function renderCards(rootId, items, renderer) {
  const root = document.getElementById(rootId);
  if (!root) return;
  items.forEach((item) => root.appendChild(renderer(item)));
}

function renderLoadMoreCards(rootId, buttonId, items, renderer, initialCount = 4, batchSize = 4) {
  const root = document.getElementById(rootId);
  const button = document.getElementById(buttonId);
  if (!root) return;

  let renderedCount = 0;

  function appendNext(count) {
    const nextItems = items.slice(renderedCount, renderedCount + count);
    nextItems.forEach((item) => root.appendChild(renderer(item)));
    renderedCount += nextItems.length;
    if (button) {
      const shouldHide = renderedCount >= items.length;
      button.hidden = shouldHide;
      if (button.parentElement) button.parentElement.hidden = shouldHide;
    }
  }

  appendNext(initialCount);

  if (button) {
    button.addEventListener("click", () => appendNext(batchSize));
  }
}

renderLoadMoreCards("multi-gallery", "multi-load-more", multiCases, renderCaseCard);
renderCards("long-gallery", longCases, renderCaseCard);
