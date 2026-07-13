(() => {
  const points = [
    {id:"p1",name:"西樊各庄科技小院・乡野食作工坊",shortName:"乡野食作工坊",category:"集合点・劳动实践",summary:"豆腐与黄桃罐头制作，把乡土风味变成一堂劳动课。",detail:"依托西樊各庄村乡土资源与农业实践课程，开展手工石磨豆腐、黄桃罐头制作和乡土饮食体验，让研学团队完成从原料认知到动手制作的全过程。",audience:"亲子家庭、大学生、中小学生研学团体",capacity:"15人左右",image:"assets/point-card-images/乡野食作工坊.png",iconSrc:"assets/point-icons/乡野食作工坊.png",activities:["石磨豆腐制作","黄桃罐头制作","乡土饮食体验","劳动实践研学"],seasons:["全年","7月","8月","9月"],x:64.1,y:52.9},
    {id:"p2",name:"无人机系统研究院",shortName:"无人机系统研究院",category:"智慧农机",summary:"观察植保无人机巡田，理解无人化农业生产。",detail:"依托中国农业大学农业无人机系统研究院平谷基地，参观智慧果园无人作业示范，了解植保无人机精准施药、智能巡检与农业遥感应用。",audience:"亲子家庭、大学生研学团体",capacity:"15人左右",image:"assets/point-card-images/无人机系统研究院.JPG",iconSrc:"assets/point-icons/无人机系统研究院.png",activities:["农业无人机参观","智慧果园巡检","无人农场示范","农业科技问答"],seasons:["全年"],x:73.7,y:63.7},
    {id:"p3",name:"番茄无土栽培基地",shortName:"番茄无土基地",category:"智慧温室",summary:"探索高GABA番茄与国产化智能温室技术。",detail:"基地采用椰糠高架无土栽培模式，配套根区送风、国产化智控系统和温室巡检机器人，开展高GABA特色番茄种植科普。",audience:"亲子家庭",capacity:"15人左右",image:"assets/point-card-images/番茄育种基地.jpg",iconSrc:"assets/point-icons/番茄无土栽培基地.png",activities:["高GABA番茄科普","无土栽培观察","温室机器人参观","亲子种植实践"],seasons:["10月","11月","12月","1月","2月","3月","4月","5月","6月"],x:52.8,y:81.1},
    {id:"p4",name:"平谷大桃采摘园",shortName:"大桃采摘园",category:"智慧果业",summary:"从AI巡检到采摘，认识平谷大桃数字化果园。",detail:"果园引入矮化密植树形、物联网监测点位、无人机AI视觉巡检、精准滴灌和智能防护设施，适合开展果树生产与智慧农业调研。",audience:"亲子家庭、大学生、老年人",capacity:"15人左右",image:"assets/point-card-images/平谷大桃采摘园.jpg",iconSrc:"assets/point-icons/平谷大桃采摘园.png",activities:["大桃采摘","AI视觉巡检","矮化密植技术观察","果园物联网体验"],seasons:["7月","8月","9月"],x:69.7,y:35.4},
    {id:"p5",name:"京瓦奶牛示范园",shortName:"京瓦奶牛园",category:"数字牧场",summary:"近距离观察全自动挤奶与奶牛智能饲养。",detail:"京瓦奶业示范园集成全自动挤奶、AI体况检测、物联网大数据、光伏低碳和粪污循环等技术，展示奶牛全流程精准饲养。",audience:"亲子家庭",capacity:"15人左右",image:"assets/point-card-images/京瓦奶牛示范园.jpg",iconSrc:"assets/point-icons/京瓦奶牛示范园.png",activities:["全自动挤奶参观","奶牛别墅观察","牛犊互动","低碳奶业科普"],seasons:["全年"],x:55.5,y:36.8},
    {id:"p6",name:"北京鳄鱼欢乐谷",shortName:"鳄鱼欢乐谷",category:"特色养殖",summary:"探索北方低温环境下的智能恒温养鳄技术。",detail:"基地采用智能恒温养殖系统，稳定维持水温与室温，配套通风、消杀和环境调控设备，形成水陆复合养殖示范。",audience:"亲子家庭",capacity:"15人左右",image:"assets/point-card-images/北京鳄鱼欢乐谷.jpg",iconSrc:"assets/point-icons/北京鳄鱼欢乐谷.png",activities:["鳄鱼互动体验","恒温养殖科普","生态循环课堂","鳄鱼宴文化认知"],seasons:["全年"],x:54.2,y:57.7},
    {id:"p7",name:"正大鸡蛋梦工厂",shortName:"鸡蛋梦工厂",category:"智慧蛋鸡",summary:"参观智慧蛋鸡全产业链。",detail:"正大蛋业采用智能管控系统、全自动密闭养殖流水线、无抗饲料和粪污资源化循环工艺，展示养殖、加工、溯源数字化闭环。",audience:"亲子家庭",capacity:"15人左右",image:"assets/point-card-images/正大鸡蛋梦工厂.jpg",iconSrc:"assets/point-icons/正大鸡蛋梦工厂.png",activities:["蛋鸡舍参观","鸡蛋科普","智能流水线观察","生态循环认知"],seasons:["全年"],x:56.4,y:60.8},
    {id:"p8",name:"村委会・自然美育工坊",shortName:"自然美育工坊",category:"自然美育",summary:"珠宝鉴定与植物非遗手作，连接乡土自然与艺术。",detail:"结合珠宝玉石科普、串珠实操、植物拓染、扎染和国画书签研学课，以乡土草木体验传统工艺与乡村文化振兴。",audience:"全年龄段人群",capacity:"每堂课20人左右",image:"assets/point-card-images/自然美育工坊.png",iconSrc:"assets/point-icons/自然美育工坊.png",activities:["珠宝玉石鉴定","串珠实践","植物拓染","植物扎染"],seasons:["全年"],x:64.0,y:50.1},
    {id:"p9",name:"水培生菜研学基地",shortName:"生菜水培基地",category:"无土农业",summary:"体验移动水培系统与生菜从播种到采收的全流程。",detail:"基地优化移动水培系统，采用NFT深水培工艺和多因子环境联动算法，展示全年生菜生产和无土农业技术。",audience:"亲子家庭",capacity:"15人左右",image:"assets/point-card-images/生菜水培基地.jpg",iconSrc:"assets/point-icons/生菜水培研学基地.png",activities:["无土栽培观察","亲子采摘","水培系统科普","全年生菜体验"],seasons:["全年"],x:47.0,y:77.4},
    {id:"p10",name:"种子繁殖草莓基地",shortName:"草莓种子基地",category:"种源科技",summary:"了解草莓杂交制种，体验种源端的技术创新。",detail:"基地利用杂交制种技术育成种子繁殖型草莓新品种，适合开展种业创新、农业实践和乡村人才振兴交流。",audience:"亲子家庭、大学生",capacity:"15人左右",image:"assets/point-card-images/草莓种子基地.png",iconSrc:"assets/point-icons/草莓种子繁殖基地.png",activities:["种子杂交制种科普","亲子草莓采摘","草莓种源观察","大学生农业实践"],seasons:["12月","1月","2月","3月","4月","5月"],x:52.2,y:74.4},
    {id:"p11",name:"智慧蓝莓研学基地",shortName:"智慧蓝莓基地",category:"智慧果业",summary:"蓝莓采摘与花青素科普，观察智能温室果品生产。",detail:"围绕蓝莓生长、花青素营养价值、设施温室环境调控和采摘体验，适合亲子、中小学生和主题研学团队。",audience:"亲子家庭、中小学生",capacity:"15人左右",image:"assets/point-card-images/智慧蓝莓基地.jpg",iconSrc:"assets/point-icons/蓝莓智慧温室.png",activities:["蓝莓采摘","花青素科普","智能温室观察","果品营养课堂"],seasons:["5月","6月","7月","8月"],x:59.2,y:47.2}
  ];
  const seasons = [
    {label:"1月",dates:"小寒 · 大寒",note:"冬藏观察 · 温室环境记录",intro:"冬季适合开展温室农业观察，了解水培、无土栽培和蛋鸡全产业链，结合冬藏特点讲解现代农业如何突破季节限制。",projects:["水培生菜研学基地","无土栽培番茄基地","京瓦奶牛示范园","正大鸡蛋梦工厂"],recommended:["p9","p3","p5","p7"]},
    {label:"2月",dates:"立春 · 雨水",note:"春耕准备 · 种子与土壤观察",intro:"围绕春耕备耕开展种子观察、土壤认知和育苗体验，让学生了解农作物从种子到发芽的生命过程。",projects:["种子繁殖草莓基地","乡野食作工坊","水培生菜研学基地"],recommended:["p10","p1","p9"]},
    {label:"3月",dates:"惊蛰 · 春分",note:"设施农业启幕 · 智慧温室观察",intro:"重点观察智慧温室、无土栽培和农业无人机应用，理解设施农业如何提升生产效率。",projects:["无土栽培番茄基地","水培生菜研学基地","无人机研究院"],recommended:["p3","p9","p2"]},
    {label:"4月",dates:"清明 · 谷雨",note:"播种体验 · 无人机巡田 · 节气课堂",intro:"可结合蓝莓生长、种子繁育、无人机巡田和自然美育开展综合研学，突出春季播种与科技农事。",projects:["智慧蓝莓研学基地","无人机研究院","种子繁殖草莓基地","自然美育工坊"],recommended:["p11","p2","p10","p8"]},
    {label:"5月",dates:"立夏 · 小满",note:"果树生长 · 奶业科普 · 智慧农机",intro:"适合安排蓝莓采摘、奶牛科普、鸡蛋产业链和智慧农机观察，体现夏季农业多元发展。",projects:["智慧蓝莓研学基地","京瓦奶牛示范园","无人机研究院","正大鸡蛋梦工厂"],recommended:["p11","p5","p2","p7"]},
    {label:"6月",dates:"芒种 · 夏至",note:"夏播农事 · 水肥一体化 · 科技农田",intro:"围绕夏播、水肥一体化和科技农田展开，了解现代农业如何通过技术提升产量与资源利用效率。",projects:["无土栽培番茄基地","水培生菜研学基地","无人机研究院","乡野食作工坊"],recommended:["p3","p9","p2","p1"]},
    {label:"7月",dates:"小暑 · 大暑",note:"温室观察 · 果实管理 · 牧场清凉课堂",intro:"可安排大桃采摘、番茄智慧种植、奶牛科普和特色动物观察，兼顾夏季户外体验与室内科普。",projects:["平谷大桃采摘园","无土栽培番茄基地","京瓦奶牛示范园","北京鳄鱼欢乐谷"],recommended:["p4","p3","p5","p6"]},
    {label:"8月",dates:"立秋 · 处暑",note:"果园实践 · 秋收准备 · 特色养殖观察",intro:"适合开展果园实践、特色养殖观察和农产品加工体验，帮助学生理解秋收前的农事准备。",projects:["平谷大桃采摘园","北京鳄鱼欢乐谷","京瓦奶牛示范园","乡野食作工坊"],recommended:["p4","p6","p5","p1"]},
    {label:"9月",dates:"白露 · 秋分",note:"秋分农事 · 采摘体验 · 低碳牧场课堂",intro:"以秋分农事和采摘体验为主，结合自然美育、牧场科普和低碳农业知识，强化丰收主题。",projects:["平谷大桃采摘园","智慧蓝莓研学基地","京瓦奶牛示范园","自然美育工坊"],recommended:["p4","p11","p5","p8"]},
    {label:"10月",dates:"寒露 · 霜降",note:"丰收记录 · 农产品加工 · 乡村自然观察",intro:"适合安排豆腐制作、黄桃罐头加工、蛋品产业链和自然手作课程，突出农产品转化与乡村产业价值。",projects:["乡野食作工坊","正大鸡蛋梦工厂","自然美育工坊","种子繁殖草莓基地"],recommended:["p1","p7","p8","p10"]},
    {label:"11月",dates:"立冬 · 小雪",note:"农事复盘 · 农业科技成果分享",intro:"可开展年度农事复盘和农业科技成果分享，重点讲解无人机、智慧温室和农产品加工技术。",projects:["无人机研究院","无土栽培番茄基地","水培生菜研学基地","乡野食作工坊"],recommended:["p2","p3","p9","p1"]},
    {label:"12月",dates:"大雪 · 冬至",note:"年度成果展 · 冬季牧场与温室研学",intro:"适合组织冬季农业成果展、温室观察、牧场科普和自然美育课程，形成年度研学闭环。",projects:["京瓦奶牛示范园","正大鸡蛋梦工厂","水培生菜研学基地","无土栽培番茄基地","自然美育工坊"],recommended:["p5","p7","p9","p3","p8"]}
  ];
  const guideRoutes = [
    ["p5","p6","p9","p11"],["p3","p7","p8"],["p2","p4","p10"],["p1","p8","p10"],["p6","p5","p7","p11"],["p2","p4","p3","p11"],["p9","p1","p8"],["p9","p6","p8","p11"],["p5","p9"],["p4","p10","p1","p8"]
  ];
  const byId = Object.fromEntries(points.map(p => [p.id, p]));
  let activeSeason = 0;
  let selected = new Set(["p1"]);
  let routeReady = false;

  function renderSeason() {
    const season = seasons[activeSeason];
    document.querySelectorAll('.season-bar button').forEach((btn, index) => {
      btn.classList.toggle('active', index === activeSeason);
      btn.setAttribute('aria-selected', index === activeSeason ? 'true' : 'false');
    });
    const summary = document.querySelector('.season-summary');
    if (summary) {
      const strong = summary.querySelector('strong');
      if (strong) strong.textContent = `${season.label}研学`;
      const paragraphs = summary.querySelectorAll('p');
      if (paragraphs[0]) paragraphs[0].textContent = season.note;
      if (paragraphs[1]) paragraphs[1].textContent = season.intro;
      const projects = summary.querySelector('.season-projects');
      if (projects) projects.innerHTML = season.projects.map(project => `<span>${project}</span>`).join('');
    }
    document.querySelectorAll('.map-marker').forEach(marker => {
      const id = marker.dataset.pointId;
      marker.classList.toggle('is-recommended', season.recommended.includes(id));
    });
  }

  function renderMarkers() {
    document.querySelectorAll('.map-marker').forEach(marker => {
      const id = marker.dataset.pointId;
      marker.classList.toggle('is-selected', selected.has(id));
    });
  }

  function renderRouteList() {
    const routeList = document.querySelector('.route-list');
    const count = Math.max(0, selected.size - 1);
    document.querySelector('.planner-title span').textContent = `${count}/10 个目的地`;
    document.querySelector('.duration-row strong').textContent = count === 0 ? '待选点' : (count <= 2 ? '建议半日' : '建议一日');
    const generate = document.querySelector('[data-testid="generate-route"]');
    if (generate) generate.disabled = count === 0;
    if (!routeList) return;
    const ordered = ['p1', ...[...selected].filter(id => id !== 'p1')];
    routeList.innerHTML = `<div class="route-item route-item--base"><span class="route-number">⌖</span><div><small>集合 · 起终点</small><strong>西樊各庄科技小院</strong></div><span class="locked">固定</span></div>` +
      ordered.filter(id => id !== 'p1').map((id, index) => {
        const p = byId[id];
        return `<button class="route-item" data-remove-id="${id}"><span class="route-number">${index + 1}</span><div><small>${p.category}</small><strong>${p.shortName}</strong></div><span class="remove">×</span></button>`;
      }).join('') +
      (count === 0 ? `<div class="empty-route"><span>＋</span><span>从地图选择你感兴趣的研学点位</span></div>` : '');
    routeList.querySelectorAll('[data-remove-id]').forEach(btn => btn.addEventListener('click', () => {
      selected.delete(btn.dataset.removeId);
      routeReady = false;
      renderAll();
    }));
  }

  function renderRouteLayer() {
    const layer = document.querySelector('.route-layer');
    if (!layer) return;
    const ordered = ['p1', ...[...selected].filter(id => id !== 'p1'), 'p1'];
    layer.innerHTML = ordered.slice(0, -1).map((id, index) => {
      const from = byId[id], to = byId[ordered[index + 1]];
      const dx = to.x - from.x, dy = to.y - from.y;
      const length = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      return `<span class="route-segment ${routeReady ? 'route-segment--active' : ''}" style="left:${from.x}%;top:${from.y}%;width:${length}%;transform:rotate(${angle}deg)" aria-hidden="true"></span>`;
    }).join('');
    document.querySelector('.route-result-toast')?.remove();
    if (routeReady && selected.size > 1) {
      const toast = document.createElement('div');
      toast.className = 'route-result-toast';
      toast.innerHTML = `<span class="success-icon">✓</span><div><strong>研学环线已生成</strong><small>${selected.size - 1} 个目的地 · ${selected.size - 1 <= 2 ? '建议半日' : '建议一日'} · 展示线路以实际接待为准</small></div>`;
      document.querySelector('.map-canvas')?.appendChild(toast);
    }
  }

  function renderAll() {
    renderSeason();
    renderMarkers();
    renderRouteList();
    renderRouteLayer();
  }

  function openDrawer(id) {
    const p = byId[id];
    document.querySelector('.drawer-backdrop')?.remove();
    const backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    const added = selected.has(id);
    backdrop.innerHTML = `<aside class="detail-drawer" aria-label="${p.name}详情"><button class="drawer-close" aria-label="关闭详情">×</button><div class="drawer-image"><img class="drawer-main-image" src="${p.image}" alt="${p.name}"><img class="drawer-ip" src="${p.iconSrc}" alt="" aria-hidden="true"><span>${p.category}</span></div><div class="drawer-body"><small>STUDY POINT</small><h3>${p.name}</h3><p>${p.detail}</p><div class="point-meta"><span><small>适合人群</small><strong>${p.audience}</strong></span><span><small>建议人数</small><strong>${p.capacity}</strong></span></div><h4>可开展活动</h4><div class="activity-tags">${p.activities.map(a => `<span>${a}</span>`).join('')}</div><h4>适合时令</h4><div class="season-tags">${p.seasons.map(s => `<span>${s}</span>`).join('')}</div>${id === 'p1' ? `<button class="drawer-action is-fixed" disabled>已固定为起终点</button>` : `<button class="drawer-action ${added ? 'is-added' : ''}" data-toggle-point="${id}">${added ? '已加入路线' : '加入我的路线'}</button>`}</div></aside>`;
    document.body.appendChild(backdrop);
    backdrop.addEventListener('click', event => { if (event.target === backdrop) backdrop.remove(); });
    backdrop.querySelector('.drawer-close').addEventListener('click', () => backdrop.remove());
    backdrop.querySelector('[data-toggle-point]')?.addEventListener('click', event => {
      const pointId = event.currentTarget.dataset.togglePoint;
      if (selected.has(pointId)) selected.delete(pointId); else selected.add(pointId);
      routeReady = false;
      renderAll();
      backdrop.remove();
    });
  }

  function boot() {
    document.querySelectorAll('.map-marker').forEach(marker => {
      const match = marker.getAttribute('data-testid')?.match(/map-marker-(p\d+)/);
      if (match) marker.dataset.pointId = match[1];
      marker.addEventListener('click', () => openDrawer(marker.dataset.pointId));
    });
    document.querySelectorAll('.season-bar button').forEach((btn, index) => btn.addEventListener('click', () => {
      activeSeason = index;
      routeReady = false;
      renderAll();
    }));
    document.querySelector('.season-summary button')?.addEventListener('click', () => {
      selected = new Set(['p1', ...seasons[activeSeason].recommended.filter(id => id !== 'p1')]);
      routeReady = false;
      renderAll();
    });
    document.querySelector('.icon-button')?.addEventListener('click', () => {
      selected = new Set(['p1']);
      routeReady = false;
      renderAll();
    });
    document.querySelector('[data-testid="generate-route"]')?.addEventListener('click', () => {
      if (selected.size <= 1) return;
      routeReady = true;
      renderAll();
    });
    document.querySelectorAll('.guide-card').forEach((card, index) => card.addEventListener('click', () => {
      selected = new Set(['p1', ...guideRoutes[index].filter(id => id !== 'p1')]);
      routeReady = false;
      document.querySelectorAll('.guide-card').forEach(el => el.classList.remove('is-active'));
      card.classList.add('is-active');
      renderAll();
      document.querySelector('#map')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
    renderAll();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();