export const translations = {
  zh: {
    nav: {
      why: "关于我们",
      features: "功能总览",
      pricing: "价格方案",
      resources: "资源中心",
      strategy: "免费咨询",
      bookDemo: "预约演示",
      contact: "联系我们",
      home: "首页",
      ourStory: "我们的故事",
      product: "产品",
      company: "公司",
      getStarted: "开始使用",
      privacy: "隐私政策",
      terms: "服务条款",
      rights: "版权所有",
      machine: "奶茶机联动",
      labels: "防水贴标",
      blog: "博客与资源",
      comingSoon: "完整文章内容即将上线...",
      features_all: "所有功能",
      features_payment: "防水贴标",
      features_inventory: "智能库存",
      features_loyalty: "原生会员",
      features_online: "在线点单",
      features_reports: "精细报表",
      features_marketing: "营销触达"
    },
    home: {
      heroTitle: "奶茶店需要的是“<span class='text-emerald-400'>操作系统</span>”，不是一台收银机",
      heroSubtitle: "I'TEA SUPPLY：POS + 在线点单 + 会员 + 配方库存 + 营销 + 奶茶机联动<br/>我们自己开店、自己跑系统，用真实门店把奶茶这条链路打通。",
      ctaStrategy: "领取 30 分钟免费咨询",
      ctaDemo: "预约演示",
      painTitle: "低价冲击来了，真正决定你能不能活下来的是：利润、复购、效率",
      painDesc: "",
      pain1Title: "全线降价很容易",
      pain1Desc: "难的是不降价也能留住客户。",
      pain2Title: "真正的价格战",
      pain2Desc: "打到最后拼的是：出杯稳定、复购体系、成本可控。",
      pain3Title: "你需要的是一套",
      pain3Desc: "“能算清楚、能跑得稳、能持续复购”的系统。",
      solutionTitle: "我们不帮你打价格战，我们帮你打“生存战”",
      solutionDesc: "",
      personaTag: "我们不是卖软件的，我们是开奶茶店的",
      personaTitle: "我们不是卖软件的，我们是开奶茶店的",
      personaDesc1: "我们自己有门店（OneSip），每天在真实运营中用同一套系统。",
      personaDesc2: "奶茶机、贴标流程、库存逻辑、支付对账，都是我们自己跑出来的经验。所以我们更懂：高峰会卡在哪里、混单怎么发生、库存怎么亏掉、会员怎么玩才有效。",
      personaExp: "真实经验",
      personaExpDesc: "每日在繁忙门店实战验证。",
      personaLoop: "完整闭环",
      personaLoopDesc: "POS + 机器 + 供应链打通。",
      pillarsTitle: "我们怎么做",
      pillarsSubtitle: "我们不帮你打价格战，我们帮你打“生存战”",
      pillar1Title: "守住利润",
      pillar1Desc: "配方扣减 + 损耗可见 + 毛利可算",
      pillar1List: ["配方扣减", "损耗可见", "毛利可算"],
      pillar2Title: "抢回复购",
      pillar2Desc: "会员积分/储值/礼品卡 + 私域触达（WhatsApp/SMS）",
      pillar2List: ["会员积分/储值/礼品卡", "私域触达（WhatsApp/SMS）"],
      pillar3Title: "提高效率",
      pillar3Desc: "在线点单 + KDS + 防水贴标 + 奶茶机联动",
      pillar3List: ["在线点单 + KDS", "防水贴标", "奶茶机联动"],
      compTitle: "为什么很多系统在奶茶行业用着别扭？",
      compList: ["会员/营销外包，数据分散，出了问题互相甩锅", "库存只会“进销存”，不会“按配方扣减”，越卖越乱", "交易抽成/导出限制/合同锁死，让你越用越被动"],
      usTitle: "我们的立场",
      usTag: "I'TEA SUPPLY",
      usList: ["一个平台打通全链路", "数据属于商户，可导出", "支付在商户名下（Stripe），我们不抽交易费"],
      ctaTitle: "想在低价冲击下稳住利润？先聊 30 分钟",
      ctaDesc: "这不是推销电话。我们会给你一张“可执行清单”：菜单结构、毛利检查点、复购动作、高峰效率动作。"
    },
    shopTypes: {
      title: "不同店型，痛点不同",
      subtitle: "点击你的门店类型，看我们如何解决你的核心问题。",
      more: "除此之外：",
      types: {
        chain: {
          label: "连锁/加盟 (多店/总部)",
          painTitle: "痛点：规模化管理",
          pains: [
            "各门店口味不一，难以标准化管理。",
            "加盟商数据不透明，总部缺乏实时监控。",
            "物料损耗严重，成本核算困难。"
          ],
          needs: "核心需求：强管控、标准化出品、全局数据分析",
          heroFeature: {
            key: "machine",
            title: "奶茶机联动 (标准化/回传)",
            desc: "机器自动制作，确保口味一致，数据实时回传总部。"
          },
          subFeatures: [
            { key: "inventory", title: "Cookbook (含加料) + 损耗", desc: "精准配方扣减，严格控制物料成本。" },
            { key: "all-in-one", title: "Chain 总部看板/对比", desc: "多维度门店数据对比，辅助经营决策。" }
          ],
          additionalFeatures: []
        },
        local: {
          label: "本地品牌 (1-3店)",
          painTitle: "痛点：品牌增长",
          pains: [
            "顾客流失率高，难以建立品牌忠诚度。",
            "营销活动效果无法追踪，钱花得不明不白。",
            "随着单量增加，成本控制变得复杂。"
          ],
          needs: "核心需求：提升复购率、精准营销、精细化成本控制",
          heroFeature: {
            key: "loyalty",
            title: "会员 (积分/储值) + 定向触达 + 活动效果",
            desc: "建立完善的会员体系，精准推送营销活动并追踪转化。"
          },
          subFeatures: [
            { key: "inventory", title: "Cookbook (含加料) + 损耗", desc: "精细化管理库存，减少不必要的浪费。" },
            { key: "reports", title: "用户界面: 运营分析 产品趋势", desc: "直观的数据分析，掌握产品畅销趋势。" }
          ],
          additionalFeatures: []
        },
        old: {
          label: "老店 (单店)",
          painTitle: "痛点：效率提升",
          pains: [
            "手写杯贴容易出错，高峰期经常做错单。",
            "顾客排队时间长，体验不佳。",
            "前台后厨沟通成本高，容易产生摩擦。"
          ],
          needs: "核心需求：减少出错率、提升点单和出杯效率",
          heroFeature: {
            key: "waterproof-labels",
            title: "防水贴标",
            desc: "清晰打印每杯要求，防水防糊，杜绝做错单。"
          },
          subFeatures: [
            { key: "online-ordering", title: "在线点单 (队列/通知)", desc: "顾客自助点单，实时查看排队进度。" }
          ],
          additionalFeatures: []
        },
        new: {
          label: "新开店 (0→1)",
          painTitle: "痛点：生存与起步",
          pains: [
            "对成本没有概念，不知道每杯到底赚多少钱。",
            "新手员工容易出错，培训成本高。",
            "急需积累第一批忠实顾客。"
          ],
          needs: "核心需求：算清毛利、简化操作、快速积累会员",
          heroFeature: {
            key: "inventory",
            title: "Cookbook (含加料) + 损耗",
            desc: "清晰计算每杯成本，把控利润空间。"
          },
          subFeatures: [
            { key: "waterproof-labels", title: "防水贴标 (信息贴杯)", desc: "降低新手出错率，提升出杯速度。" },
            { key: "loyalty", title: "会员 (积分/储值) + 定向触达 + 活动效果", desc: "从第一天开始积累回头客。" }
          ],
          additionalFeatures: []
        },
        hybrid: {
          label: "融合店 (多品类)",
          painTitle: "痛点：多业态管理",
          pains: [
            "同时售卖饮品和餐食，订单容易混乱。",
            "不同品类的制作节奏不同，难以协调。",
            "难以评估各个品类的真实盈利能力。"
          ],
          needs: "核心需求：清晰的订单分流、多品类报表分析",
          heroFeature: {
            key: "waterproof-labels",
            title: "防水贴标 (信息贴杯/餐)",
            desc: "饮品和餐食清晰标识，避免错发漏发。"
          },
          subFeatures: [
            { key: "online-ordering", title: "在线点单 (队列/预约)", desc: "支持提前预约，缓解高峰期压力。" },
            { key: "reports", title: "报表 (按产品/渠道/时段) 产品趋势和人效", desc: "多维度分析，找出最赚钱的品类。" }
          ],
          additionalFeatures: []
        },
        automation: {
          label: "自动化/少人力",
          painTitle: "痛点：极致效率",
          pains: [
            "人工成本高昂，招工难、留人难。",
            "员工疲劳导致效率下降、品质不稳定。",
            "高峰期产能达到瓶颈，无法突破。"
          ],
          needs: "核心需求：机器代人、稳定出品、极致坪效",
          heroFeature: {
            key: "machine",
            title: "奶茶机联动 (标准化/回传)",
            desc: "扫码自动制作，彻底解放双手，确保品质如一。"
          },
          subFeatures: [
            { key: "online-ordering", title: "在线点单 (控节奏)", desc: "智能控制接单节奏，匹配机器产能。" },
            { key: "inventory", title: "Cookbook (含加料) + 损耗", desc: "精准计算机器用料，杜绝浪费。" }
          ],
          additionalFeatures: []
        }
      }
    },
    pricing: {
      title: "套餐与定价策略",
      subtitle: "透明定价：按月付费，不抽交易费",
      essential: "ESSENTIAL",
      essentialDesc: "适合：单店起步/老店换系统",
      essentialPrice: "€89",
      essentialNote: "€79/月 (年付 €948)",
      pro: "PRO",
      proDesc: "适合：品牌店/高峰强/要复购",
      proPrice: "€149",
      proNote: "€129/月 (年付 €1548)",
      chain: "CHAIN",
      chainDesc: "适合：多店/总部/加盟",
      chainPrice: "Discuss",
      chainNote: "定制方案",
      features: {
        pos: "POS + QR点单",
        online: "队列通知",
        inventory: "基础库存/报表",
        reporting: "贴标流程支持",
        support: "Essential 全部",
        machine: "会员/礼品卡",
        multi: "营销基础",
        advInventory: "（可加机器联动）",
        priority: "多门店同步",
        loyalty: "中央配方/标准化",
        chainDash: "总部看板/对比",
        recipe: "API/定制接入",
        api: "API 接口",
        app: "自有 App 接入",
        account: "专属客户经理"
      },
      addons: "Add-on（按需加购）：",
      inventoryPlus: "奶茶机联动",
      inventoryPlusDesc: "€50/月（如租赁机器可免除）",
      smsPlatform: "Marketing Advance",
      smsPlatformDesc: "€50/月",
      smsCredits: "Cookbook",
      smsCreditsDesc: "（冰/糖/加料精细扣减）：€50/月",
      hardware: "更多增值服务",
      posTerm: "SMS/email 平台费：按token扣费",
      kdsScreen: "网络客服跳转（WeChat/Ins/TikTok）：€5/账户",
      kiosk: "自助点单机 (€2500–3500)",
      printer: "打印机 (€250–300)",
      labelPrinter: "贴标打印机 (€350–450)",
      machineRent: "自动奶茶机租赁 (€499–799/月)",
      setup: "上线与安装 (Setup)",
      remote: "Onboarding & Setup",
      remoteDesc: "€299–599",
      onsite: "上门安装",
      onsiteDesc: "€500–1200",
      custom: "高级对接/API",
      customDesc: "定制报价",
      promise: "风险与应对",
      transparency: "支付与现金流控制",
      transparencyDesc: "Stripe 账户在商户名下；我们不代收、不抽交易费；费用可追溯",
      sovereignty: "数据主权/迁移风险",
      sovereigntyDesc: "在合同与官网写清：数据属于商户、随时可导出、终止后X天导出窗口",
      stability: "设备与系统稳定性",
      stabilityDesc: "奶茶机联动提供：状态回传、异常重试、自动转人工、手动模式一键切换、错误日志",
      delivery: "交付成本失控",
      deliveryDesc: "“2周上线模板+培训视频+检查表”；上线费覆盖交付；折扣不得降到保本线以下",
      gdpr: "营销合规与GDPR",
      gdprDesc: "数据最小化、明示同意、退订机制；分层触达；不处理不必要敏感数据"
    },
    strategy: {
      tag: "30 分钟免费奶茶门店诊断",
      title: "30 分钟免费奶茶门店诊断<br/><span class='text-emerald-600'>（针对低价冲击场景）</span>",
      subtitle: "这 30 分钟我们给你什么：一张“行动清单”",
      deliverablesTitle: "你会拿到一张“行动清单”，包含：",
      audit: "1. 菜单结构建议",
      auditList: ["引流款/利润款/升级款怎么分"],
      margin: "2. 毛利检查点",
      marginList: ["哪些原料/加料正在吞利润"],
      retention: "3. 复购动作",
      retentionList: ["会员积分/储值/礼品卡怎么做才不亏"],
      efficiency: "4. 高峰效率动作",
      efficiencyList: ["在线点单、贴标、出杯动线怎么改"],
      prepTitle: "你需要准备什么（越少越好）：",
      prepList: ["最近 4 周大概单量/客单（没有精确数据也行）", "菜单（截图即可）", "主要原料成本（粗略即可）", "高峰时段和你觉得最痛的一个问题"],
      formTitle: "预约你的时段",
      formName: "姓名",
      formShop: "店名/城市",
      formEmail: "邮箱",
      formLoc: "门店类型（单店/多店）",
      formPos: "目前系统（可选）",
      formPain: "最头疼的问题",
      formPainOptions: ["客流", "价格", "毛利", "效率", "库存", "复购"],
      submit: "确认预约",
      noCard: "无需信用卡。无强制消费。"
    },
    featuresPage: {
      title: "所有功能，围绕四个结果：<br/><span class='text-emerald-600'>利润 / 复购 / 效率 / 标准化</span>",
      subtitle: "经营一家现代化、高效率奶茶店所需的一切。",
      youAre: "你是：",
      learnMore: "了解更多",
      cta: "预约完整演示"
    },
    features: {
      onlineTitle: "小程序在线点单",
      onlineDesc: "队列可见 + 完成通知 + 预约取餐（等待可预期）",
      labelsTitle: "防水贴标",
      labelsDesc: "贴杯不糊，高峰不混单（立刻见效）",
      inventoryTitle: "Cookbook 配方扣减",
      inventoryDesc: "配方扣减（含加料）+ 损耗记录",
      loyaltyTitle: "会员与定向触达",
      loyaltyDesc: "会员（积分/储值/礼品卡）+ 定向触达",
      machineTitle: "奶茶机联动打通",
      machineDesc: "状态回传、异常重试、自动转人工",
      reportsTitle: "精细报表",
      reportsDesc: "分渠道/产品/时段报表 + CSV导出",
      allInOneTitle: "Chain 总部看板",
      allInOneDesc: "多店对比 +（可选API）",
      paymentTitle: "支付透明 + 数据主权",
      paymentDesc: "支付在商户名下、数据在合同内可随时导出",
      learnMore: "了解更多",
      ctaBtn: "预约完整演示",
      heroTitle: "所有功能，围绕四个结果：<br/><span class='text-emerald-600'>利润 / 复购 / 效率 / 稳定</span>",
      heroSubtitle: "经营一家现代化、高效率奶茶店所需的一切。"
    },
    featureDetails: {
      'waterproof-labels': {
        title: "防水贴标：贴杯不糊，高峰不混单",
        subtitle: "防水贴标 (贴杯不糊/高峰不混单)",
        result: "奶茶环境潮湿、冰杯有水汽也不糊；每杯一张直接贴杯；信息一眼看懂，错单返工明显下降。",
        how: [
          "防水材质：专为冷饮/冰杯设计，遇水不糊，字迹清晰",
          "一单一杯：每杯都有唯一身份证，减少背诵，降低培训难度",
          "信息标准化：甜度、冰度、加料一目了然，减少口头确认"
        ],
        scenario: {
          role: "真实场景",
          quote: "高峰期最怕的是“这杯是谁的？”或者“这杯加没加椰果？”。贴标的价值在于：把所有信息贴在杯子上，让制作和出杯都不用猜。"
        },
        mediaSlots: [
          { type: "video", content: "标签打印出来（镜头对准标签信息） (2s)" },
          { type: "video", content: "贴到冰杯上（杯身有明显水珠/水汽） (3s)" },
          { type: "video", content: "用湿布擦/轻喷水（展示“不会糊”） (3s)" },
          { type: "video", content: "连续三杯出杯：每杯一张标签、快速区分 (2s)" },
          { type: "image", content: "GIF：打印→贴杯→擦拭验证（循环）" }
        ],
        faq: [
          { q: "标签纸成本高吗？", a: "比普通热敏纸略高，但比“做错一杯”的成本低得多。" },
          { q: "打印机容易卡纸吗？", a: "我们选用的打印机专为高频餐饮设计，稳定性经过验证。" },
          { q: "能打印 Logo 吗？", a: "支持自定义模版，可打印 Logo 和二维码。" }
        ],
        cta: "预约演示 / 看“暴力擦拭”防水测试视频"
      },
      'all-in-one': {
        title: "一个平台打通奶茶全链路：不分散、不扯皮",
        subtitle: "一体化 All-in-One",
        result: "收银、在线点单、会员、库存、营销、贴标、设备联动——都在一个系统里，出了问题一条链路排查。",
        how: [
          "功能在同一后台：订单、客户、库存、营销数据不分散",
          "流程在一条链路：下单 → 打单/KDS → 贴标 → 出杯 → 复购触达",
          "责任不分散：不需要找多家公司，少扯皮、少损耗"
        ],
        scenario: {
          role: "真实场景",
          quote: "很多店老板最烦的是：系统越多越乱。会员一个系统、点单一个系统、库存一个系统，出问题互相甩锅。All-in-One 的价值是：你每天少花时间“对系统”，多花时间“做生意”。"
        },
        mediaSlots: [
          { type: "video", content: "后台一屏展示订单+会员+库存 (10-15s)" },
          { type: "image", content: "系统模块结构图 (POS/Online/Loyalty/Inventory/Marketing/Machine)" },
          { type: "video", content: "从下单到贴标出杯的流程动图 (6-10s)" }
        ],
        faq: [
          { q: "我已经有别的系统了，还需要一体化吗？", a: "如果你现在觉得“数据分散、对账麻烦、出问题扯皮”，一体化就值得。" },
          { q: "一体化会不会很难上手？", a: "我们按奶茶流程设计，重点是“少步骤、跑得顺”。" },
          { q: "一体化是不是锁死？", a: "我们主张数据可导出、支付在商户名下，系统是工具不是枷锁。" }
        ],
        cta: "预约演示 / 领取 30 分钟免费诊断"
      },
      'online-ordering': {
        title: "在线点单不是重点，重点是：看得到队列、等得明白",
        subtitle: "在线点单 (带实时队列 + 完成通知 + 预约取餐)",
        result: "顾客下单后能实时看到：前面还有几杯、订单进度、完成通知；也可以预约取餐时间，减少等待焦虑和现场拥堵。",
        how: [
          "实时队列可见：显示“你前面还有 X 杯”，顾客知道还要等多久，不会一直问",
          "订单进度可追踪：已接单 / 制作中 / 已完成（状态清晰），不靠猜、不靠柜台喊",
          "完成自动通知：staff 点“完成”后，顾客收到消息，高峰减少拥堵和反复确认",
          "预约取餐（备注时间）：顾客可选择或备注“我几点来取”，门店可提前安排节奏"
        ],
        scenario: {
          role: "真实场景",
          quote: "很多系统也有在线点单，但顾客下单后只能“干等”。结果就是：不停问、围在柜台、现场更乱。队列可见 + 完成通知的价值是：把等待变成可预期，把高峰变得更顺。"
        },
        mediaSlots: [
          { type: "video", content: "顾客端显示“前面还有 X 杯”+进度变化 (10-12s)" },
          { type: "video", content: "staff 点击“完成”→顾客收到完成通知 (8-10s)" },
          { type: "image", content: "预约取餐界面（可备注时间）" },
          { type: "image", content: "高峰现场对比（无队列vs有队列，视觉化）" }
        ],
        faq: [
          { q: "队列是怎么计算的？会不会不准？", a: "基于门店真实订单队列（按制作/完成状态更新），比“纯预计时间”更直观。" },
          { q: "完成通知是短信吗？", a: "可按门店配置（消息通知/短信/WhatsApp等），重点是“完成即通知”。" },
          { q: "预约取餐会不会导致有人插队？", a: "不会。预约只是帮助门店分散峰值，实际制作仍按规则排队/安排。" }
        ],
        cta: "预约演示 / 看一段真实“队列可见+完成通知”的录屏"
      },
      'pos-kds': {
        title: "POS + KDS：高峰稳住，不靠吼、不靠记",
        subtitle: "POS + KDS (高峰更稳、少出错)",
        result: "订单清晰、队列清晰、优先级清晰，高峰不靠经验硬扛。",
        how: [
          "订单标准化：甜度、冰量、加料都按规则显示",
          "队列可视化：谁先做、做到了哪一步，一目了然",
          "减少口头传递：少漏单、少听错、少返工"
        ],
        scenario: {
          role: "真实场景",
          quote: "高峰崩盘通常不是因为单多，而是因为“信息乱”。KDS 的作用是把信息变成流程，减少人脑负担，尤其对新员工非常友好。"
        },
        mediaSlots: [
          { type: "video", content: "KDS 屏幕订单流动（接单→制作→完成） (10-15s)" },
          { type: "image", content: "POS 端加料/甜度界面" },
          { type: "video", content: "员工无需喊单也能配合的实拍 (6-10s)" }
        ],
        faq: [
          { q: "我们店不大，有必要上 KDS 吗？", a: "只要你有高峰、容易混单或新员工多，就值得。" },
          { q: "KDS 能按类别汇总吗？", a: "可以做队列/分类展示（按门店需求设置）。" },
          { q: "做 KDS 会不会增加设备成本？", a: "成本可控，但能明显减少返工与客诉。" }
        ],
        cta: "预约演示 / 看一段真实高峰流程视频"
      },
      'loyalty': {
        title: "会员体系：把“来一次”变成“常来”",
        subtitle: "会员体系 (积分/储值/礼品卡)",
        result: "不靠全场打折，靠会员机制做复购：积分、储值、礼品卡，把老客抓住。",
        how: [
          "积分机制：简单规则，鼓励二次到店",
          "储值与礼品卡：锁定现金流、带来送礼传播",
          "定向触达：针对老客、沉睡客，而不是全场撒券"
        ],
        scenario: {
          role: "真实场景",
          quote: "低价冲击下，你最该保护的是“愿意为体验买单的老客”。会员系统的目的不是发券，而是把复购变成可控动作。"
        },
        mediaSlots: [
          { type: "image", content: "会员注册/积分界面" },
          { type: "video", content: "顾客下单自动累计积分/储值扣减 (8-12s)" },
          { type: "image", content: "礼品卡样式示意（可做节日款）" }
        ],
        faq: [
          { q: "会员是不是会让我们亏（一直送）？", a: "关键是规则设计，我们主张“轻奖励+提高复购”，不做全场大额券。" },
          { q: "能不能按门店设置不同会员活动？", a: "可以，单店/多店都能配置。" },
          { q: "会员数据归谁？", a: "归商户，你可以导出。" }
        ],
        cta: "领取 3 套奶茶店复购规则模板 / 预约演示"
      },
      'inventory': {
        title: "配方库存 (Cookbook)：每杯卖出，原料自动扣减",
        subtitle: "配方库存 Cookbook (把浪费变成可见)",
        result: "库存不是进销存，是“按配方消耗”。你卖一杯奶茶，系统自动扣茶/奶/糖/杯/加料，浪费看得见。",
        how: [
          "配方扣减：每个产品绑定原料用量",
          "加料扣减：珍珠/椰果/奶盖等自动扣",
          "损耗记录：报废/试饮/返工可记，毛利更真实"
        ],
        scenario: {
          role: "真实场景",
          quote: "很多奶茶店越做越忙，但月底越来越“没钱”。根本原因往往不是销量，而是损耗、返工、采购不准。配方库存能把这些黑洞变成数字。"
        },
        mediaSlots: [
          { type: "video", content: "卖出一杯 → 库存自动扣减动画 (10-15s)" },
          { type: "image", content: "配方编辑界面（茶/奶/糖/杯/加料）" },
          { type: "image", content: "原料消耗报表/异常提示截图" }
        ],
        faq: [
          { q: "配方是不是很难建？", a: "先做 TOP20 畅销款，两周内就能跑起来。" },
          { q: "如果我改配方怎么办？", a: "版本可调整，建议按季更新。" },
          { q: "这能帮我省多少钱？", a: "通常省在：加料浪费、杯材损耗、采购过量、返工成本。" }
        ],
        cta: "预约 30 分钟免费诊断：帮你找出“最吞利润的3个原料”"
      },
      'marketing': {
        title: "营销触达：不用天天发券，只在“对的时机”提醒对的人",
        subtitle: "营销触达 (WhatsApp/SMS)",
        result: "会员分层 + WhatsApp/SMS 触达，让复购变成动作，而不是运气。",
        how: [
          "分层触达：新客/老客/沉睡客不同策略",
          "低峰拉动：把周一到周四冷门时段做起来",
          "活动可追踪：发出去多少、回来多少、花了多少成本"
        ],
        scenario: {
          role: "真实场景",
          quote: "很多店做营销失败，是因为“乱发券”。正确做法是：小范围、精准触达、看回流数据。你要的是复购，不是热闹。"
        },
        mediaSlots: [
          { type: "image", content: "分层标签/触达名单截图" },
          { type: "video", content: "创建活动→选择人群→发送→看回流 (8-12s)" },
          { type: "image", content: "活动效果报表截图（回流率/成本/订单数）" }
        ],
        faq: [
          { q: "短信是不是很贵？", a: "我们建议先从 WhatsApp/低频短信开始，小范围验证ROI再放大。" },
          { q: "能不能只发给“快流失的老客”？", a: "可以，这就是分层触达的意义。" },
          { q: "会不会违反隐私？", a: "只对同意接收的人群触达，并且规则透明可退订。" }
        ],
        cta: "获取 3 套“低价冲击下的复购活动模板” / 预约演示"
      },
      'reports': {
        title: "分渠道看数据：你到底是“哪来的生意”？",
        subtitle: "报表 & 分渠道分析 (online / kiosk / POS / QR)",
        result: "同样是营业额，来源不同，策略完全不同。我们支持按渠道拆分：online / kiosk / POS / QR。",
        how: [
          "渠道自动标记：每单自带来源标签",
          "对比关键指标：销售额、订单数、客单、时间段、爆品",
          "导出可用数据：可下载 CSV，用于会计或你自己的分析"
        ],
        scenario: {
          role: "真实场景",
          quote: "很多老板只看到“今天卖了多少”，却不知道“是游客买的、还是老客回来的，是线上来的还是路过来的”。渠道拆分能让你做正确动作：哪里该投放，哪里该做会员，哪里该优化动线。"
        },
        mediaSlots: [
          { type: "image", content: "报表总览页截图" },
          { type: "image", content: "渠道筛选/对比截图" },
          { type: "video", content: "切换渠道→爆品榜单→导出CSV (8-10s)" }
        ],
        faq: [
          { q: "我能不能只看某个渠道的数据？", a: "可以筛选查看。" },
          { q: "能不能看爆品和加料偏好？", a: "可以看畅销产品/组合趋势（按配置开放深度）。" },
          { q: "导出的数据能给会计用吗？", a: "可以CSV导出，便于导入会计软件。" }
        ],
        cta: "预约演示 / 我们帮你看一次“渠道结构”是否健康"
      },
      'machine': {
        title: "奶茶机联动：订单→设备→出杯，一条链路我们负责到底",
        subtitle: "奶茶机联动 (端到端打通 + 异常兜底 + 可诊断)",
        result: "设备异常不可避免，我们的优势是：能定位、能兜底、不中断营业，不需要你去找三家公司扯皮。",
        how: [
          "指令链路：把订单变成可执行步骤。订单确认后 → 生成“设备执行单”，每杯有唯一 ID，配方版本绑定。",
          "状态机：设备执行不是黑箱。系统记录每杯的状态（已接单/执行中/已完成/失败），员工在后台能看到哪杯卡在哪一步。",
          "异常兜底：不中断营业。自动重试、自动转人工（超时/失败自动标记）、一键切换模式（店内可快速切到“手动模式”）。",
          "记录与诊断：问题可复盘。系统自动记录时间、错误码、失败步骤，用于远程诊断。",
          "统一支持：一个团队负责整条链路。设备是你们的，系统也是你们的，排查路径是“一条链路”。"
        ],
        scenario: {
          role: "真实场景",
          quote: "当你店里忙到爆的时候，你最怕的是“突然卡住”。我们的联动系统要做到：卡住了也不影响你继续卖——要么自动恢复，要么立刻转人工，订单不丢、队列不乱、顾客不炸。"
        },
        mediaSlots: [
          { type: "video", content: "下单→设备执行→完成通知/贴标出杯 (10-15s)" },
          { type: "video", content: "设备异常→系统提示→一键转人工→继续出杯 (8-12s)" },
          { type: "image", content: "状态列表（执行中/完成/失败）" },
          { type: "image", content: "错误日志（脱敏示例）" },
          { type: "image", content: "配方版本绑定示意（防止版本错配）" }
        ],
        faq: [
          { q: "设备异常会不会导致停摆？", a: "不该。我们设计了重试+转人工+手动模式切换，订单照走。" },
          { q: "谁负责排查？", a: "我们负责整条链路（系统+设备），不需要你找第三方扯皮。" },
          { q: "如果我不开机器联动，系统还能用吗？", a: "可以。联动是加强版，用于标准化和效率提升。" },
          { q: "联动能不能帮助减少新员工出错？", a: "能。关键步骤被系统固化，员工只需按流程执行。" }
        ],
        cta: "看“异常兜底”真实演示视频 / 预约演示"
      },
      'transparency': {
        title: "支付透明、数据透明：你的生意你说了算",
        subtitle: "支付透明 + 数据透明 (看得清、算得清、带得走)",
        result: "支付账户在商户名下，费用结构透明；所有经营数据可导出、可分析，不被系统锁住。",
        how: [
          "支付透明 (Money)：支付在商户名下 (Stripe)，钱直接进商户账户，支付手续费由 Stripe 直接扣，我们不抽每单交易费。",
          "数据透明 (Data)：数据属于商户，随时可导出 (CSV / 报表)，合同结束后仍可导出数据。",
          "生态分析：按渠道、产品、时间、会员、库存等多维度拆分数据，让你知道钱从哪里赚、哪里漏。"
        ],
        scenario: {
          role: "真实场景",
          quote: "很多老板只看到“今天卖了多少”，却不知道“是游客买的、还是老客回来的”。渠道拆分能让你做正确动作：哪里该投放，哪里该做会员，哪里该优化动线。"
        },
        mediaSlots: [
          { type: "image", content: "Stripe 后台“payout/fee”页面截图（脱敏）" },
          { type: "image", content: "I'TEA SUPPLY 报表总览截图（订单/营业额/客单）" },
          { type: "image", content: "分渠道对比截图（online vs POS 等）" },
          { type: "video", content: "导出CSV的一次操作录屏 (8-12s)" },
          { type: "image", content: "一个“生态分析示例图”" }
        ],
        faq: [
          { q: "Stripe 费率是不是你们决定的？", a: "不是，Stripe 官方扣费，直接在商户账户里可见。" },
          { q: "我能不能把数据导走做自己的分析？", a: "可以，随时导出。" },
          { q: "如果我以后不用了，数据拿得走吗？", a: "可以（建议合同写清“终止后X天可导出”）。" },
          { q: "你们会不会对数据做限制？", a: "不会。数据是商户资产，我们的定位是工具，不是平台锁定。" }
        ],
        cta: "预约演示 / 我们可以帮你做一次“生态结构诊断”（免费30分钟）"
      }
    },
    featureDetail: {
      result: "一句话结果",
      scenario: "真实场景",
      faq: "常见问题 FAQ",
      seeAction: "眼见为实",
      bookDemo: "预约演示",
      freeStrategy: "领取 30 分钟免费咨询",
      unifiedTitle: "想把奶茶店“跑顺、跑稳、跑赚钱”？",
      unifiedSubtitle: "先给行动清单，再决定要不要上系统"
    },
    resources: {
      title: "奶茶 <span class='text-emerald-600'>知识库</span>",
      subtitle: "低价冲击下，奶茶店最容易亏钱的 5 个坑",
      readBtn: "阅读文章",
      catCost: "成本控制",
      article1Title: "低价冲击下，奶茶店最容易亏钱的 5 个坑",
      article1Desc: "当低价连锁进入市场，最危险的不是“客人走了”，而是你为了抢客流做错动作。",
      article1Body: `
        <p class="lead text-xl text-slate-600 mb-8 font-medium">当低价连锁进入市场，最危险的不是“客人走了”，而是你为了抢客流做错动作：全线降价、乱发券、库存更乱、员工更忙、利润更薄。下面这 5 个坑，是很多站稳脚跟的奶茶店最容易踩的。</p>

        <h3>坑 1：全线降价</h3>
        <p>降价最容易，但一旦客人形成“你也可以更便宜”的预期，你就很难回到原价。更糟的是：你没有规模优势，越降越亏。</p>

        <h3>坑 2：用“全场券”对抗价格战</h3>
        <p>全场券会把原本愿意原价购买的老客也打折，等于你自己给自己降价。<br/>更好的做法是：只给“会带来复购的人群”，而不是给所有人。</p>

        <h3>坑 3：毛利算不清，只能凭感觉</h3>
        <p>很多店的亏，亏在：加料、杯材、损耗、试饮、返工。<br/>如果没有配方扣减和损耗记录，你永远只能靠“感觉”做决策。</p>

        <h3>坑 4：高峰期混单导致返工与客诉</h3>
        <p>客诉成本不只是一杯饮料，是排队变长、评价变差、员工崩溃。<br/>高峰最怕“乱”，贴标/KDS/流程化比“多招一个人”更有效。</p>

        <h3>坑 5：把复购当运气</h3>
        <p>没有会员体系，你的老客复购是随机的。<br/>会员不是“送券”，会员是“把回头客变成可控资产”。</p>

        <div class="bg-emerald-50 p-6 rounded-xl border border-emerald-100 my-8">
          <h3 class="text-emerald-800 mt-0">结尾清单：你应该做的 3 件事</h3>
          <ul class="list-disc pl-5 space-y-2 text-emerald-900">
            <li>选 1–2 个引流款，不做全线降价</li>
            <li>先把每杯真实毛利算出来（含损耗）</li>
            <li>做一个“7 天内二次到店”的复购动作</li>
          </ul>
        </div>
      `,
      article1Cta: "想要一份针对你门店的“抗低价冲击行动清单”？预约 30 分钟免费诊断。",
      
      catBehavior: "平台抽成",
      article2Title: "为什么“每单抽成”对高单量店很痛",
      article2Desc: "你生意越好，交得越多。这不是“成本换服务”，更像“平台税”。",
      article2Body: `
        <p class="lead text-xl text-slate-600 mb-8 font-medium">很多系统会把价格写得很低，但每单再收一笔“交易费用”。单看不贵，单量一大就很可怕。对奶茶这种高频生意来说，抽成会变成稳定的利润挤压。</p>

        <h3>核心公式（写给老板看）</h3>
        <p class="font-mono bg-slate-100 p-4 rounded-lg my-4">每月平台抽成 = 月订单量 × 每单费用<br/>举例：3000 单 × €0.15 = €450/月（这还没算支付通道费）</p>

        <h3>为什么这会越来越痛</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li>你生意越好，交得越多</li>
          <li>这不是“成本换服务”，更像“平台税”</li>
          <li>当你开第二家店，它会成倍增加</li>
        </ul>

        <h3>更好的结构是什么</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li>软件服务费：固定月费（可预期）</li>
          <li>支付手续费：由支付通道/Stripe 直接扣（透明）</li>
          <li>数据属于商户，随时可导出（不靠锁定赚钱）</li>
        </ul>

        <div class="bg-emerald-50 p-6 rounded-xl border border-emerald-100 my-8">
          <p class="text-emerald-900 font-medium mb-0">如果你单量高，优先选择“固定月费 + 支付在商户名下”的结构，你会更自由、更可控。</p>
        </div>
      `,
      article2Cta: "你告诉我：月单量、客单价、支付方式占比。我可以帮你 5 分钟算出哪种结构更适合你。",

      catOperations: "配方库存",
      article3Title: "奶茶店库存为什么必须做“配方扣减”",
      article3Desc: "不做配方扣减，你的库存永远是“看起来差不多”，但月底总是对不上。",
      article3Body: `
        <p class="lead text-xl text-slate-600 mb-8 font-medium">奶茶店的库存不是“卖出一杯扣一个 SKU”。<br/>你卖的是：茶底 + 奶 + 糖 + 冰 + 杯 + 盖 + 吸管 + 加料。<br/>不做配方扣减，你的库存永远是“看起来差不多”，但月底总是对不上。</p>

        <h3>配方扣减解决什么</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li>每杯卖出，系统按配方自动扣原料</li>
          <li>加料自动扣减（珍珠/椰果/奶盖等）</li>
          <li>你能看到“真实消耗”和“异常损耗”</li>
        </ul>

        <h3>不做配方扣减的常见后果</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li>采购靠感觉，缺货或囤货</li>
          <li>浪费看不见，毛利变薄</li>
          <li>研发新品无法算成本</li>
        </ul>

        <div class="bg-emerald-50 p-6 rounded-xl border border-emerald-100 my-8">
          <h3 class="text-emerald-800 mt-0">落地建议（老板能做）</h3>
          <ul class="list-disc pl-5 space-y-2 text-emerald-900">
            <li>先从 TOP20 销量产品做配方</li>
            <li>先把“杯材+加料”做进去（这里最容易亏）</li>
            <li>每周对 2 个关键原料做盘点（比如珍珠/奶/杯）</li>
          </ul>
        </div>
      `,
      article3Cta: "想用 2 周把配方库存跑起来？预约 30 分钟诊断，我们会给你一张实施清单。",

      catHardware: "会员复购",
      article4Title: "会员不是发券：如何把价格战变成“复购战”",
      article4Desc: "让客人回来，才是最高性价比的增长。关键：不要给全场券。",
      article4Body: `
        <p class="lead text-xl text-slate-600 mb-8 font-medium">价格战不是不能打，但你应该打“复购战”。<br/>让客人回来，才是最高性价比的增长。</p>

        <h3>会员系统真正要做的三件事</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li>让客人留下联系方式（可触达）</li>
          <li>让客人产生“再来一次”的理由（轻奖励）</li>
          <li>让客人逐步升级（加料/大杯/套餐）</li>
        </ul>

        <h3>三套奶茶店可直接用的复购动作</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>7 天二次到店奖励：</strong>第二次加料半价/送小料</li>
          <li><strong>低峰时段专属：</strong>周一到周四 14:00–17:00 小券</li>
          <li><strong>生日/节日触达：</strong>不是大额券，是“仪式感 + 小奖励”</li>
        </ul>

        <div class="bg-yellow-50 p-6 rounded-xl border border-yellow-100 my-8">
          <p class="text-yellow-900 font-bold mb-0">关键：不要给全场券</p>
          <p class="text-yellow-800 mt-2 mb-0">全场券会把本来愿意原价买的人也打折，亏得更快。</p>
        </div>
      `,
      article4Cta: "需要我帮你把会员动作做成“系统里可执行的规则”？预约免费 30 分钟。",

      catStrategy: "高峰效率",
      article5Title: "高峰不混单：贴标系统到底值不值？",
      article5Desc: "高峰期最贵的不是时间，是返工和客诉。贴杯能把“混单成本”直接砍掉。",
      article5Body: `
        <p class="lead text-xl text-slate-600 mb-8 font-medium">高峰期最贵的不是时间，是返工和客诉。<br/>混单一次的成本：一杯成本 + 员工时间 + 排队变长 + 体验下降。</p>

        <h3>传统小票的问题</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li>受潮易糊</li>
          <li>不贴在杯上，拿错概率高</li>
          <li>高峰信息密度太低（加料/甜度/去冰）</li>
        </ul>

        <h3>贴杯的价值</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li>每杯唯一标识</li>
          <li>加料/甜度清楚</li>
          <li>减少返工与争吵</li>
          <li>新员工也不容易出错</li>
        </ul>

        <div class="bg-emerald-50 p-6 rounded-xl border border-emerald-100 my-8">
          <h3 class="text-emerald-800 mt-0">你怎么判断值不值（简单算法）</h3>
          <p class="text-emerald-900 mb-0">如果你每天高峰混单 3 次：<br/>3 杯返工 + 等待时间 + 客诉风险<br/>一周就能超过贴标系统带来的成本。</p>
        </div>
      `,
      article5Cta: "想看我们真实门店怎么跑“出一杯贴一张”？预约演示，我给你看现场流程。",

      catInventory: "设备联动",
      article6Title: "奶茶机联动的价值：不是炫技，是稳定“出杯链路”",
      article6Desc: "系统和设备必须打通，否则一出问题就是甩锅地狱。",
      article6Body: `
        <p class="lead text-xl text-slate-600 mb-8 font-medium">自动设备的价值不是“看起来高级”，而是把出杯标准化，把错误率降下来，把人力依赖降下来。<br/>但前提是：系统和设备必须打通，否则一出问题就是甩锅地狱。</p>

        <h3>常见失败场景</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li>系统能下单，但设备不响应</li>
          <li>设备出错，系统不知道</li>
          <li>订单/配方/设备版本不一致</li>
        </ul>
        <p>结果就是：高峰崩盘、人工补救、客诉爆发。</p>

        <h3>联动真正解决的是三件事</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>指令统一：</strong>订单到设备执行一致</li>
          <li><strong>状态可见：</strong>失败/超时有记录</li>
          <li><strong>可兜底：</strong>异常时自动转人工流程，不停单</li>
        </ul>

        <div class="bg-emerald-50 p-6 rounded-xl border border-emerald-100 my-8">
          <p class="text-emerald-900 font-medium mb-0">如果你在考虑自动化/标准化，我建议先做一次 30 分钟诊断：你店适不适合上设备、该怎么上、怎么不影响营业。</p>
        </div>
      `,
      article6Cta: "如果你在考虑自动化/标准化，我建议先做一次 30 分钟诊断：你店适不适合上设备、该怎么上、怎么不影响营业。",

      newsletterTitle: "加入 OneSip 社区",
      newsletterDesc: "获取每周奶茶运营技巧、市场趋势和技术更新。",
      emailPlaceholder: "输入你的邮箱",
      subscribeBtn: "订阅"
    },
    contact: {
      title: "聊聊效率",
      subtitle: "准备好体验 I'TEA SUPPLY 了吗？预约演示或咨询任何问题。",
      getInTouch: "联系方式",
      email: "发邮件给我们",
      chat: "在线聊天",
      faq: "常见问题",
      formTitle: "预约演示",
      firstName: "名",
      lastName: "姓",
      phone: "电话 (选填)",
      message: "留言 (选填)",
      request: "提交申请"
    },
    footer: {
      desc: "现代奶茶品牌的操作系统。由店主构建，为店主服务。",
      product: "产品",
      company: "公司",
      getStarted: "开始使用",
      privacy: "隐私政策",
      terms: "服务条款",
      rights: "版权所有"
    },
    why: {
      heroTitle: "I'TEA SUPPLY：为奶茶品牌打造的运营操作系统",
      heroSubtitle: "I'TEA SUPPLY 专注于奶茶/饮品门店的数字化与标准化运营。我们做的不是一台“通用收银机”，而是一套覆盖 点单、出杯、会员、配方库存、营销触达、设备联动与数据分析 的奶茶行业一体化系统，帮助门店在竞争加剧与价格压力下，把生意做得更稳、更清楚、更可复制。",
      foundersTitle: "创始合伙人团队：食品 × 工程 × 真实门店",
      foundersDesc: "I'TEA SUPPLY 由具备国际一流学术背景与世界 500 强产业经验的合伙人团队共同打造，我们的优势在于：既理解食品与供应链，也理解自动化与系统工程，更来自一线门店的长期运营实践。",
      partner1Title: "合伙人 1（Owner / Co-founder）",
      partner1Edu: "瓦格宁根大学（Wageningen University & Research）食品相关专业背景",
      partner1Exp: "曾在食品工业世界 500 强企业任职多年，具备超过十年的行业管理与规模化落地经验",
      partner1Focus: "专注方向：产品与供应链、食品合规与标准化、门店运营与成本结构",
      partner2Title: "合伙人 2（Co-founder）",
      partner2Edu: "代尔夫特理工大学（TU Delft）机电一体化相关专业背景",
      partner2Exp: "现任世界 500 强企业高管，拥有成熟的工程化与系统化管理经验",
      partner2Focus: "专注方向：自动化设备可靠性、软硬件联动、运维体系与流程闭环",
      originTitle: "我们为什么做 I'TEA SUPPLY：从真实奶茶门店出发",
      originP1: "I'TEA SUPPLY 的起点来自真实门店，而不是“先做软件再找场景”。\n我们自 2024 年起在荷兰运营 OneSip 奶茶门店，持续验证自动化出杯与标准化运营体系，在高峰日可实现 日销 300+ 杯 的稳定出杯能力，并在鹿特丹本地形成扎实口碑与客流基础。",
      originP2: "同时，我们自 2020 年起建立并运营自有奶茶供应链体系，服务欧洲多地客户，长期深耕原料合规、稳定供货与成本控制。正因理解“门店端 + 供应链端”的全链路，我们更清楚：奶茶行业真正需要的是能够把经营变成数据、把数据变成动作、把动作变成结果的一体化系统。",
      principlesTitle: "我们的原则：透明、可控、可迁移",
      principles: [
        {
          title: "1）只做奶茶行业",
          desc: "我们不追求“什么餐饮都能用”，只追求把奶茶门店做得更专业、更稳定、更可复制。"
        },
        {
          title: "2）数据属于商户，随时可导出",
          desc: "经营数据是商户的核心资产。我们反对用合同与数据把客户锁在系统里。"
        },
        {
          title: "3）支付透明，账户在商户名下",
          desc: "我们使用 Stripe 等成熟支付体系，支付账户归属商户；费用结构透明、可追溯、可对账。"
        },
        {
          title: "4）一体化闭环，责任不分散",
          desc: "点单、在线、会员、库存、贴标、设备联动与报表尽量在同一体系内完成，减少多系统扯皮与运营损耗。"
        }
      ],
      resultsTitle: "我们能带来的结果（不是功能堆叠）",
      results: [
        {
          title: "利润更可控",
          desc: "配方库存（Cookbook 扣减）+ 损耗可见 + 成本结构更清晰"
        },
        {
          title: "复购更可做",
          desc: "会员积分/储值/礼品卡 + 精准触达（WhatsApp/SMS）"
        },
        {
          title: "高峰更稳定",
          desc: "在线点单队列可见 + 完成通知 + 防水贴标减少错单返工"
        },
        {
          title: "标准化更可复制",
          desc: "奶茶机联动与异常兜底机制，支持扩张与加盟"
        },
        {
          title: "数据更能决策",
          desc: "按渠道/产品/时段/门店的报表与导出能力，支持“生态分析”"
        }
      ],
      ctaTitle: "30 分钟免费门店诊断（先给方案，再谈系统）",
      ctaDesc: "我们提供 30 分钟免费咨询，聚焦“低价冲击、利润变薄、复购不足、高峰效率混乱”等问题，输出一张可执行清单：\n菜单结构建议、毛利检查点、复购动作、高峰流程改造建议。\n你会拿到清晰的下一步动作，再决定是否需要系统落地。",
      ctaBtn: "预约演示 / 领取 30 分钟免费咨询"
    }
  },
  en: {
    nav: {
      why: "About Us",
      features: "Features",
      pricing: "Pricing",
      resources: "Resources",
      strategy: "Strategy Session",
      bookDemo: "Book Demo",
      contact: "Contact",
      home: "Home",
      ourStory: "Our Story",
      product: "Product",
      company: "Company",
      getStarted: "Get Started",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved",
      machine: "Machine Integration",
      labels: "Waterproof Labels",
      blog: "Blog & Resources",
      comingSoon: "Full article content coming soon...",
      features_all: "All Features",
      features_payment: "Waterproof Labels",
      features_inventory: "Smart Inventory",
      features_loyalty: "Native Loyalty",
      features_online: "Online Ordering",
      features_reports: "Granular Reports",
      features_marketing: "Marketing"
    },
    home: {
      heroTitle: "Bubble Tea shops need an \"<span class='text-emerald-400'>Operating System</span>\", not just a POS.",
      heroSubtitle: "I'TEA SUPPLY: POS + Online Ordering + Loyalty + Inventory + Marketing + Machine Integration.<br/>We run our own shops, use our own system, and connect the entire bubble tea workflow with real store operations.",
      ctaStrategy: "Get Free 30-min Strategy Session",
      ctaDemo: "Book a Demo",
      painTitle: "The price war is here. Survival depends on: Profit, Retention, Efficiency.",
      painDesc: "",
      pain1Title: "Slashing prices is easy",
      pain1Desc: "The hard part is keeping customers without lowering prices.",
      pain2Title: "The real price war",
      pain2Desc: "Ultimately, it's about stable output, retention systems, and controllable costs.",
      pain3Title: "What you need is",
      pain3Desc: "A system that \"calculates clearly, runs stably, and drives continuous retention\".",
      solutionTitle: "We don't help you fight a price war. We help you fight a \"Survival War\".",
      solutionDesc: "",
      personaTag: "We are not software vendors. We are bubble tea shop owners.",
      personaTitle: "We are not software vendors. We are bubble tea shop owners.",
      personaDesc1: "We own OneSip and use the same system in real operations every day.",
      personaDesc2: "Tea machines, labeling workflows, inventory logic, payment reconciliation—these are all experiences we've lived through. So we understand better: where peak hours get stuck, how mixed orders happen, how inventory gets lost, and how to make loyalty effective.",
      personaExp: "Real Experience",
      personaExpDesc: "Validated daily in busy stores.",
      personaLoop: "Full Loop",
      personaLoopDesc: "POS + Machine + Supply Chain connected.",
      pillarsTitle: "How We Do It",
      pillarsSubtitle: "We don't help you fight a price war. We help you fight a \"Survival War\".",
      pillar1Title: "Protect Profit",
      pillar1Desc: "Recipe Deduction + Visible Waste + Calculable Gross Margin",
      pillar1List: ["Recipe Deduction", "Visible Waste", "Calculable Gross Margin"],
      pillar2Title: "Reclaim Retention",
      pillar2Desc: "Points/Stored Value/Gift Cards + Private Domain Reach (WhatsApp/SMS)",
      pillar2List: ["Points/Stored Value/Gift Cards", "Private Domain Reach (WhatsApp/SMS)"],
      pillar3Title: "Boost Efficiency",
      pillar3Desc: "Online Ordering + KDS + Waterproof Labels + Machine Integration",
      pillar3List: ["Online Ordering + KDS", "Waterproof Labels", "Machine Integration"],
      compTitle: "Why do many systems feel awkward in the bubble tea industry?",
      compList: ["Loyalty/Marketing outsourced, data scattered, blame games when issues arise", "Inventory only tracks \"In/Out\", not \"Recipe Deduction\", getting messier as you sell", "Transaction fees/Export limits/Contract lock-ins make you passive"],
      usTitle: "Our Stance",
      usTag: "I'TEA SUPPLY",
      usList: ["One platform connecting the entire link", "Data belongs to the merchant, exportable", "Payment in merchant's name (Stripe), we don't take transaction fees"],
      ctaTitle: "Want to stabilize profits under price pressure? Chat for 30 mins first.",
      ctaDesc: "This is not a sales call. We will give you an \"Actionable Checklist\": Menu Structure, Margin Checkpoints, Retention Actions, Peak Efficiency Actions."
    },
    shopTypes: {
      title: "Different Stores, Different Pain Points",
      subtitle: "Select your store type to see your tailored solution.",
      more: "In addition:",
      types: {
        chain: {
          label: "Chain / Franchise (Multi-store/HQ)",
          painTitle: "The \"Scale\" Phase",
          pains: [
            "Inconsistent taste across stores, hard to standardize.",
            "Franchisee data is opaque, HQ lacks real-time monitoring.",
            "High material waste, difficult to calculate costs."
          ],
          needs: "Need: Strong control, standardized output, global data analysis.",
          heroFeature: {
            key: "machine",
            title: "Tea Machine Integration (Standardization/Data Sync)",
            desc: "Machines make drinks automatically, ensuring consistent taste and syncing data to HQ."
          },
          subFeatures: [
            { key: "inventory", title: "Cookbook (incl. Toppings) + Waste", desc: "Precise recipe deduction to strictly control material costs." },
            { key: "all-in-one", title: "Chain HQ Dashboard/Comparison", desc: "Multi-dimensional store data comparison to aid decisions." }
          ],
          additionalFeatures: []
        },
        local: {
          label: "Local Brand (1-3 Stores)",
          painTitle: "The \"Growth\" Phase",
          pains: [
            "High customer churn, hard to build brand loyalty.",
            "Marketing campaign effects are untrackable.",
            "Cost control becomes complex as order volume grows."
          ],
          needs: "Need: Increase repurchase rate, targeted marketing, precise cost control.",
          heroFeature: {
            key: "loyalty",
            title: "Loyalty (Points/Value) + Targeted Reach + Campaign Effect",
            desc: "Build a complete loyalty system, push targeted campaigns and track conversions."
          },
          subFeatures: [
            { key: "inventory", title: "Cookbook (incl. Toppings) + Waste", desc: "Manage inventory precisely to reduce unnecessary waste." },
            { key: "reports", title: "UI: Ops Analysis & Product Trends", desc: "Intuitive data analysis to grasp best-selling product trends." }
          ],
          additionalFeatures: []
        },
        old: {
          label: "Old Store (Single Store)",
          painTitle: "The \"Efficiency\" Phase",
          pains: [
            "Handwritten labels cause errors, frequent mistakes during peaks.",
            "Long customer queues lead to poor experience.",
            "High communication costs between front desk and kitchen."
          ],
          needs: "Need: Reduce error rates, improve ordering and serving efficiency.",
          heroFeature: {
            key: "waterproof-labels",
            title: "Waterproof Labels",
            desc: "Clearly print requirements for each cup, waterproof and smudge-proof."
          },
          subFeatures: [
            { key: "online-ordering", title: "Online Ordering (Queue/Notification)", desc: "Customers order self-service and check queue progress in real-time." }
          ],
          additionalFeatures: []
        },
        new: {
          label: "New Store (0→1)",
          painTitle: "The \"Survival\" Phase",
          pains: [
            "No concept of costs, don't know the profit per cup.",
            "New staff make mistakes easily, high training costs.",
            "Urgent need to accumulate the first batch of loyal customers."
          ],
          needs: "Need: Calculate gross margin, simplify operations, quickly build loyalty.",
          heroFeature: {
            key: "inventory",
            title: "Cookbook (incl. Toppings) + Waste",
            desc: "Clearly calculate the cost of each cup to control profit margins."
          },
          subFeatures: [
            { key: "waterproof-labels", title: "Waterproof Labels (Info on Cup)", desc: "Reduce new staff errors and speed up serving." },
            { key: "loyalty", title: "Loyalty (Points/Value) + Targeted Reach + Campaign Effect", desc: "Accumulate repeat customers from day one." }
          ],
          additionalFeatures: []
        },
        hybrid: {
          label: "Hybrid Store (Multi-category)",
          painTitle: "The \"Multi-format\" Phase",
          pains: [
            "Selling drinks and meals simultaneously causes order confusion.",
            "Different production paces for different categories are hard to coordinate.",
            "Difficult to assess the true profitability of each category."
          ],
          needs: "Need: Clear order routing, multi-category report analysis.",
          heroFeature: {
            key: "waterproof-labels",
            title: "Waterproof Labels (Info on Cup/Meal)",
            desc: "Clearly identify drinks and meals to avoid missing items."
          },
          subFeatures: [
            { key: "online-ordering", title: "Online Ordering (Queue/Reservation)", desc: "Support advance reservations to relieve peak pressure." },
            { key: "reports", title: "Reports (by Product/Channel/Time) Trends & Labor", desc: "Multi-dimensional analysis to find the most profitable categories." }
          ],
          additionalFeatures: []
        },
        automation: {
          label: "Automation / Low Labor",
          painTitle: "The \"Extreme Efficiency\" Phase",
          pains: [
            "High labor costs, hard to hire and retain staff.",
            "Staff fatigue leads to decreased efficiency and unstable quality.",
            "Peak capacity reaches a bottleneck and cannot be broken through."
          ],
          needs: "Need: Machines replacing humans, stable output, extreme efficiency.",
          heroFeature: {
            key: "machine",
            title: "Tea Machine Integration (Standardization/Data Sync)",
            desc: "Scan to make automatically, completely freeing hands and ensuring consistent quality."
          },
          subFeatures: [
            { key: "online-ordering", title: "Online Ordering (Pacing)", desc: "Smartly control order pacing to match machine capacity." },
            { key: "inventory", title: "Cookbook (incl. Toppings) + Waste", desc: "Precisely calculate machine material usage to eliminate waste." }
          ],
          additionalFeatures: []
        }
      }
    },
    pricing: {
      title: "Transparent Pricing: Monthly Fee, <br/><span class='text-emerald-600'>No Transaction Fees</span>",
      subtitle: "We only charge for software. Stripe charges for payment. The rest is yours.",
      essential: "ESSENTIAL",
      essentialDesc: "Suitable for: Single store starting out, smoothing workflows",
      essentialPrice: "€89",
      essentialNote: "€79/mo (billed annually at €948)",
      pro: "PRO",
      proDesc: "Suitable for: Stores pursuing efficiency & standardization",
      proPrice: "€149",
      proNote: "€129/mo (billed annually at €1548)",
      chain: "CHAIN",
      chainDesc: "Suitable for: Multi-store/HQ/Franchise",
      chainPrice: "Custom",
      chainNote: "Custom tiered pricing",
      features: {
        pos: "POS, KDS",
        online: "Online Ordering",
        inventory: "Basic Inventory",
        reporting: "Standard Reports",
        support: "Email Support",
        machine: "Machine Integration (Worth €50/mo included)",
        multi: "Multi-store Management",
        advInventory: "Advanced Inventory (Recipe Deduction)",
        priority: "Priority Support",
        loyalty: "Loyalty System (Points/Stamps)",
        chainDash: "Chain Dashboard",
        recipe: "Central Recipe",
        api: "API Access",
        app: "Own App Access",
        account: "Dedicated Account Manager"
      },
      addons: "Optional Add-ons",
      inventoryPlus: "Inventory Smart Plus",
      inventoryPlusDesc: "Forecasting & Waste Analysis (€29/mo)",
      smsPlatform: "SMS Platform Fee",
      smsPlatformDesc: "€10/mo/store",
      smsCredits: "SMS Credits",
      smsCreditsDesc: "€0.05–0.08/msg",
      hardware: "Hardware (Estimated)",
      posTerm: "POS Terminal (€900)",
      kdsScreen: "KDS (€600–900)",
      kiosk: "Self-order Kiosk (€2500–3500)",
      printer: "Printer (€250–300)",
      labelPrinter: "Label Printer (€350–450)",
      machineRent: "Auto Tea Machine Rent (€499–799/mo)",
      setup: "Onboarding & Setup",
      remote: "Onboarding & Setup",
      remoteDesc: "€299–599",
      onsite: "On-site Installation",
      onsiteDesc: "€500–1200",
      custom: "Advanced Integration/API",
      customDesc: "Custom Quote",
      promise: "Transparency Note",
      transparency: "Transparent Payment",
      transparencyDesc: "Stripe fees deducted directly by Stripe (Merchant Account). We do not add any markup or transaction fees.",
      sovereignty: "Data Sovereignty",
      sovereigntyDesc: "Data belongs to the merchant, exportable anytime (We make this a promise)"
    },
    strategy: {
      tag: "30-Minute Free Bubble Tea Shop Diagnosis",
      title: "30-Minute Free Bubble Tea Shop Diagnosis<br/><span class='text-emerald-600'>(For Price War Scenarios)</span>",
      subtitle: "What we give you in these 30 minutes: An \"Action Checklist\"",
      deliverablesTitle: "You will get an \"Action Checklist\" containing:",
      audit: "1. Menu Structure Suggestions",
      auditList: ["How to split Traffic Drivers / Profit Makers / Upgrades"],
      margin: "2. Margin Checkpoints",
      marginList: ["Which ingredients/toppings are eating profits"],
      retention: "3. Retention Actions",
      retentionList: ["How to do Points/Stored Value/Gift Cards without losing money"],
      efficiency: "4. Peak Efficiency Actions",
      efficiencyList: ["How to change Online Ordering, Labeling, Cup Flow"],
      prepTitle: "What you need to prepare (the less the better):",
      prepList: ["Approximate orders/ticket size for last 4 weeks (no precise data needed)", "Menu (Screenshot is fine)", "Main ingredient costs (Roughly)", "Peak hours and your biggest pain point"],
      formTitle: "Book Your Session",
      formName: "Name",
      formShop: "Shop Name/City",
      formEmail: "Email",
      formLoc: "Store Type (Single/Multi)",
      formPos: "Current POS (Optional)",
      formPain: "Biggest Headache",
      formPainOptions: ["Traffic", "Price", "Margin", "Efficiency", "Inventory", "Retention"],
      submit: "Confirm Booking",
      noCard: "No credit card required. No obligation."
    },
    featuresPage: {
      title: "All Features, Centered on Four Results: <br/><span class='text-emerald-600'>Profit / Retention / Efficiency / Standardization</span>",
      subtitle: "Everything needed to run a modern, high-efficiency bubble tea shop.",
      youAre: "You are: ",
      learnMore: "Learn More",
      cta: "Book Full Demo"
    },
    features: {
      onlineTitle: "Mini Program / Online Ordering",
      onlineDesc: "Queue visibility + completion notification + scheduled pickup (predictable wait).",
      labelsTitle: "Waterproof Labels",
      labelsDesc: "No smudging on cups, no order mix-ups during peak hours (immediate effect).",
      inventoryTitle: "Cookbook Inventory",
      inventoryDesc: "Recipe-based deduction (including toppings) + waste tracking.",
      loyaltyTitle: "Loyalty & Targeted Reach",
      loyaltyDesc: "Memberships (points/stored value/gift cards) + targeted marketing.",
      machineTitle: "Milk Tea Machine Integration",
      machineDesc: "Status sync, error retry, automatic fallback to manual.",
      reportsTitle: "Detailed Reports",
      reportsDesc: "Reports by channel/product/time + CSV export.",
      allInOneTitle: "Chain HQ Dashboard",
      allInOneDesc: "Multi-store comparison + (Optional API).",
      paymentTitle: "Payment Transparency & Data Sovereignty",
      paymentDesc: "Payments under merchant's name, data exportable anytime within contract.",
      learnMore: "Learn More",
      ctaBtn: "Book Full Demo",
      heroTitle: "All Features, Centered on Four Results: <br/><span class='text-emerald-600'>Profit / Retention / Efficiency / Stability</span>",
      heroSubtitle: "Everything needed to run a modern, high-efficiency bubble tea shop."
    },
    featureDetails: {
      'waterproof-labels': {
        title: "Waterproof Labels: Smudge-proof, No Mix-ups at Peak",
        subtitle: "Waterproof Labels (Smudge-proof / No Mix-ups)",
        result: "Milk tea environment is humid, ice cups have condensation but labels don't smudge; one label per cup directly applied; information is clear at a glance, significantly reducing wrong orders and rework.",
        how: [
          "Waterproof Material: Designed for cold drinks/ice cups, smudge-proof, clear text.",
          "One Label Per Cup: Each cup has a unique ID, reducing memorization and training difficulty.",
          "Standardized Info: Sugar, ice, toppings at a glance, reducing verbal confirmation."
        ],
        scenario: {
          role: "Real Scenario",
          quote: "The biggest fear at peak hours is 'Whose cup is this?' or 'Did this one get coconut jelly?'. The value of labels is: sticking all info on the cup, so no guessing for production and serving."
        },
        mediaSlots: [
          { type: "video", content: "Label printing (Lens on label info) (2s)" },
          { type: "video", content: "Sticking to ice cup (Condensation visible) (3s)" },
          { type: "video", content: "Wiping with wet cloth/Spraying water (Show 'No Smudge') (3s)" },
          { type: "video", content: "3 cups in a row: One label each, quick distinction (2s)" },
          { type: "image", content: "GIF: Print -> Stick -> Wipe Verify (Loop)" }
        ],
        faq: [
          { q: "Are labels expensive?", a: "Slightly more than thermal paper, but much cheaper than the cost of a wrong order." },
          { q: "Does the printer jam?", a: "We use printers designed for high-frequency catering, stability verified." },
          { q: "Can I print my Logo?", a: "Yes, custom templates support Logo and QR codes." }
        ],
        cta: "Book Demo / See 'Waterproof Test' Video"
      },
      'all-in-one': {
        title: "One Platform for the Entire Bubble Tea Workflow",
        subtitle: "All-in-One",
        result: "POS, Online Ordering, Loyalty, Inventory, Marketing, Labels, Machine Integration - all in one system.",
        how: [
          "Unified Backend: Orders, customers, inventory, marketing data in one place",
          "One Workflow: Order -> Print/KDS -> Label -> Dispense -> Retention",
          "Unified Responsibility: No blame games between vendors"
        ],
        scenario: {
          role: "Real Scenario",
          quote: "The value of All-in-One is spending less time fixing systems and more time doing business."
        },
        mediaSlots: [
          { type: "video", content: "Backend Overview (10-15s)" },
          { type: "image", content: "System Module Structure" },
          { type: "video", content: "Workflow Animation (6-10s)" }
        ],
        faq: [
          { q: "Do I need All-in-One if I have other systems?", a: "If you face scattered data and blame games, yes." },
          { q: "Is it hard to learn?", a: "Designed for bubble tea workflows, easy to pick up." },
          { q: "Is my data locked?", a: "No, data is exportable and payment is in your name." }
        ],
        cta: "Book Demo / Get Free 30-min Diagnosis"
      },
      'online-ordering': {
        title: "Online Ordering: Visible Queue & Notifications",
        subtitle: "Online Ordering",
        result: "Customers see queue status, order progress, and get completion notifications.",
        how: [
          "Real-time Queue Visibility",
          "Order Progress Tracking",
          "Automatic Completion Notification",
          "Scheduled Pickup"
        ],
        scenario: {
          role: "Real Scenario",
          quote: "Visible queues and notifications turn waiting into an expected process and smooth out peak hours."
        },
        mediaSlots: [
          { type: "video", content: "Customer View Queue (10-12s)" },
          { type: "video", content: "Completion Notification (8-10s)" },
          { type: "image", content: "Scheduled Pickup Interface" },
          { type: "image", content: "Peak Hour Comparison" }
        ],
        faq: [
          { q: "Is the queue accurate?", a: "Yes, based on real production status." },
          { q: "Is notification via SMS?", a: "Configurable (App/SMS/WhatsApp)." },
          { q: "Does scheduling cause cutting in line?", a: "No, it helps smooth out peaks." }
        ],
        cta: "Book Demo / See Real Footage"
      },
      'pos-kds': {
        title: "POS + KDS: Stabilize Peak Hours",
        subtitle: "POS + KDS",
        result: "Clear orders, clear queues, clear priorities.",
        how: [
          "Standardized Orders",
          "Visualized Queue",
          "Reduced Verbal Communication"
        ],
        scenario: {
          role: "Real Scenario",
          quote: "KDS turns information into a process, reducing mental load for staff."
        },
        mediaSlots: [
          { type: "video", content: "KDS Flow (10-15s)" },
          { type: "image", content: "POS Interface" },
          { type: "video", content: "Staff Workflow (6-10s)" }
        ],
        faq: [
          { q: "Is KDS necessary for small shops?", a: "If you have peak hours, yes." },
          { q: "Can KDS categorize orders?", a: "Yes, configurable." },
          { q: "Does it increase cost?", a: "Controllable cost, reduces rework." }
        ],
        cta: "Book Demo / See Peak Flow Video"
      },
      'loyalty': {
        title: "Loyalty: Turn One-Time Visits into Regulars",
        subtitle: "Loyalty System",
        result: "Retention via Points, Stored Value, Gift Cards.",
        how: [
          "Points Mechanism",
          "Stored Value & Gift Cards",
          "Targeted Reach"
        ],
        scenario: {
          role: "Real Scenario",
          quote: "Protect your regulars who pay for experience. Loyalty is about controllable retention."
        },
        mediaSlots: [
          { type: "image", content: "Loyalty Interface" },
          { type: "video", content: "Points Accumulation (8-12s)" },
          { type: "image", content: "Gift Card Styles" }
        ],
        faq: [
          { q: "Will we lose money?", a: "Designed for light rewards + retention." },
          { q: "Multi-store support?", a: "Yes." },
          { q: "Who owns the data?", a: "You do." }
        ],
        cta: "Get Retention Templates / Book Demo"
      },
      'inventory': {
        title: "Recipe Inventory: Deduct by Recipe",
        subtitle: "Cookbook Inventory",
        result: "Inventory based on consumption, not just in/out.",
        how: [
          "Recipe Deduction",
          "Topping Deduction",
          "Waste Recording"
        ],
        scenario: {
          role: "Real Scenario",
          quote: "Recipe inventory turns hidden waste into visible numbers."
        },
        mediaSlots: [
          { type: "video", content: "Deduction Animation (10-15s)" },
          { type: "image", content: "Recipe Editor" },
          { type: "image", content: "Consumption Report" }
        ],
        faq: [
          { q: "Is it hard to set up?", a: "Start with Top 20 items." },
          { q: "What if recipes change?", a: "Version control available." },
          { q: "How much does it save?", a: "Reduces waste and over-purchasing." }
        ],
        cta: "Book 30-min Diagnosis"
      },
      'marketing': {
        title: "Marketing Reach: Right Time, Right Person",
        subtitle: "Marketing (WhatsApp/SMS)",
        result: "Segmented reach to turn retention into an action.",
        how: [
          "Segmented Reach",
          "Boost Off-Peak",
          "Trackable Results"
        ],
        scenario: {
          role: "Real Scenario",
          quote: "Targeted reach with ROI tracking is better than random coupons."
        },
        mediaSlots: [
          { type: "image", content: "Segmentation Interface" },
          { type: "video", content: "Campaign Creation (8-12s)" },
          { type: "image", content: "Campaign Report" }
        ],
        faq: [
          { q: "Is SMS expensive?", a: "Start with WhatsApp/Low frequency." },
          { q: "Can I target lost customers?", a: "Yes." },
          { q: "Privacy concerns?", a: "Opt-in only." }
        ],
        cta: "Get Marketing Templates / Book Demo"
      },
      'reports': {
        title: "Channel Analysis: Where is your business coming from?",
        subtitle: "Reports & Analysis",
        result: "Breakdown by Online / Kiosk / POS / QR.",
        how: [
          "Auto Channel Tagging",
          "Key Metrics Comparison",
          "Exportable Data"
        ],
        scenario: {
          role: "Real Scenario",
          quote: "Channel breakdown helps you make the right moves for each source."
        },
        mediaSlots: [
          { type: "image", content: "Report Overview" },
          { type: "image", content: "Channel Comparison" },
          { type: "video", content: "Export CSV (8-10s)" }
        ],
        faq: [
          { q: "Can I filter by channel?", a: "Yes." },
          { q: "Product preferences?", a: "Yes." },
          { q: "Export for accounting?", a: "Yes, CSV." }
        ],
        cta: "Book Demo / Health Check"
      },
      'machine': {
        title: "Machine Integration: End-to-End Workflow",
        subtitle: "Machine Integration",
        result: "Order -> Machine -> Cup. We handle the whole link.",
        how: [
          "Unified Instruction Link",
          "Visible Status",
          "Exception Handling",
          "Logging & Diagnosis",
          "Unified Support"
        ],
        scenario: {
          role: "Real Scenario",
          quote: "Even if machines jam, the system ensures orders aren't lost and operations continue."
        },
        mediaSlots: [
          { type: "video", content: "Workflow Demo (10-15s)" },
          { type: "video", content: "Exception Handling (8-12s)" },
          { type: "image", content: "Status List" },
          { type: "image", content: "Error Logs" },
          { type: "image", content: "Recipe Binding" }
        ],
        faq: [
          { q: "Will it stop operations?", a: "No, auto-retry and manual mode available." },
          { q: "Who fixes it?", a: "We handle the whole link." },
          { q: "Can I use system without machine?", a: "Yes." },
          { q: "Does it help new staff?", a: "Yes, standardizes process." }
        ],
        cta: "See Real Demo / Book Demo"
      },
      'transparency': {
        title: "Transparent Payment & Data",
        subtitle: "Transparency",
        result: "Payment in your name, data belongs to you.",
        how: [
          "Payment Transparency (Stripe)",
          "Data Transparency (Exportable)",
          "Ecosystem Analysis"
        ],
        scenario: {
          role: "Real Scenario",
          quote: "Know where your money comes from and goes."
        },
        mediaSlots: [
          { type: "image", content: "Stripe Dashboard" },
          { type: "image", content: "Report Overview" },
          { type: "image", content: "Channel Comparison" },
          { type: "video", content: "Export CSV" },
          { type: "image", content: "Ecosystem Analysis" }
        ],
        faq: [
          { q: "Who sets rates?", a: "Stripe." },
          { q: "Can I export data?", a: "Yes, anytime." },
          { q: "Data after termination?", a: "Yes, exportable." },
          { q: "Any limits?", a: "No." }
        ],
        cta: "Book Demo / Free Diagnosis"
      }
    },
    featureDetail: {
      result: "One Sentence Result",
      scenario: "Real Scenario",
      faq: "FAQ",
      seeAction: "See it in action",
      bookDemo: "Book Demo",
      freeStrategy: "Get Free 30-min Strategy Session",
      unifiedTitle: "Want to run your bubble tea shop smoothly, stably, and profitably?",
      unifiedSubtitle: "Get an action checklist before deciding on a system."
    },
    resources: {
      title: "Bubble Tea <span class='text-emerald-600'>Knowledge Hub</span>",
      subtitle: "5 Pitfalls Where Bubble Tea Shops Lose Money Under Price Pressure",
      readBtn: "Read Article",
      catCost: "Cost Control",
      article1Title: "5 Pitfalls Where Bubble Tea Shops Lose Money Under Price Pressure",
      article1Desc: "When low-price chains enter, the danger isn't losing customers, it's making the wrong moves to keep them.",
      article1Body: "<p>Content coming soon...</p>",
      article1Cta: "Get Free 30-min Strategy Session",
      catBehavior: "Platform Fees",
      article2Title: "Why \"Per Order Commission\" Hurts High Volume Shops",
      article2Desc: "The better you do, the more you pay. It's not \"cost for service\", it's a \"platform tax\".",
      article2Body: "<p>Content coming soon...</p>",
      article2Cta: "Get Free 30-min Strategy Session",
      catOperations: "Recipe Inventory",
      article3Title: "Why Bubble Tea Inventory Must Use \"Recipe Deduction\"",
      article3Desc: "Without recipe deduction, your inventory is always \"looks about right\" but never matches up.",
      article3Body: "<p>Content coming soon...</p>",
      article3Cta: "Get Free 30-min Strategy Session",
      catHardware: "Loyalty Retention",
      article4Title: "Loyalty is Not Coupons: Turning Price War into \"Retention War\"",
      article4Desc: "Getting customers back is the highest ROI growth. Key: Don't give store-wide coupons.",
      article4Body: "<p>Content coming soon...</p>",
      article4Cta: "Get Free 30-min Strategy Session",
      catStrategy: "Peak Efficiency",
      article5Title: "No Mixed Orders at Peak: Is a Label System Worth It?",
      article5Desc: "The most expensive thing at peak is rework and complaints. Labels cut \"mixed order costs\" directly.",
      article5Body: "<p>Content coming soon...</p>",
      article5Cta: "Get Free 30-min Strategy Session",
      catInventory: "Machine Integration",
      article6Title: "Value of Machine Integration: Not Showy, But Stable \"Cup Flow\"",
      article6Desc: "System and equipment must connect, otherwise issues become a blame game hell.",
      article6Body: "<p>Content coming soon...</p>",
      article6Cta: "Get Free 30-min Strategy Session",
      newsletterTitle: "Join OneSip Community",
      newsletterDesc: "Get weekly bubble tea operations tips, market trends, and tech updates.",
      emailPlaceholder: "Enter your email",
      subscribeBtn: "Subscribe"
    },
    contact: {
      title: "Let's Talk Efficiency",
      subtitle: "Ready to experience I'TEA SUPPLY? Book a demo or ask anything.",
      getInTouch: "Contact Info",
      email: "Email Us",
      chat: "Live Chat",
      faq: "FAQ",
      formTitle: "Book Demo",
      firstName: "First Name",
      lastName: "Last Name",
      phone: "Phone (Optional)",
      message: "Message (Optional)",
      request: "Submit Request"
    },
    footer: {
      desc: "The operating system for modern bubble tea brands. Built by shop owners, for shop owners.",
      product: "Product",
      company: "Company",
      getStarted: "Get Started",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved"
    },
    why: {
      heroTitle: "I'TEA SUPPLY: Operating System for Bubble Tea Brands",
      heroSubtitle: "I'TEA SUPPLY focuses on digital and standardized operations for bubble tea/drink shops. We are not a \"generic POS\", but an all-in-one system covering Ordering, Cup Flow, Loyalty, Recipe Inventory, Marketing, Machine Integration, and Data Analysis, helping shops run more stably, clearly, and replicably under competition and price pressure.",
      foundersTitle: "Founding Team: Food × Engineering × Real Stores",
      foundersDesc: "I'TEA SUPPLY is built by a team of partners with world-class academic backgrounds and Fortune 500 industry experience. Our advantage: We understand food & supply chain, automation & systems engineering, and have long-term operational practice from frontline stores.",
      partner1Title: "Partner 1 (Owner / Co-founder)",
      partner1Edu: "Wageningen University & Research - Food Related Background",
      partner1Exp: "Years of experience in Fortune 500 food industry companies, with over a decade of industry management and large-scale implementation experience.",
      partner1Focus: "Focus: Product & Supply Chain, Food Compliance & Standardization, Store Operations & Cost Structure",
      partner2Title: "Partner 2 (Co-founder)",
      partner2Edu: "TU Delft - Mechatronics Related Background",
      partner2Exp: "Current Fortune 500 executive, with mature engineering and systematic management experience.",
      partner2Focus: "Focus: Automation Equipment Reliability, Software-Hardware Integration, O&M Systems & Process Loop",
      originTitle: "Why We Built I'TEA SUPPLY: Starting from Real Bubble Tea Stores",
      originP1: "I'TEA SUPPLY started from real stores, not \"software first, then find a scenario\".\nSince 2024, we have been operating OneSip bubble tea shop in the Netherlands, continuously verifying automated cup output and standardized operation systems, achieving stable output of 300+ cups/day on peak days, and building a solid reputation and customer base in Rotterdam.",
      originP2: "At the same time, we have established and operated our own bubble tea supply chain since 2020, serving customers across Europe, deeply cultivating raw material compliance, stable supply, and cost control. Because we understand the full link of \"Store + Supply Chain\", we know better: What the bubble tea industry really needs is an integrated system that turns operations into data, data into actions, and actions into results.",
      principlesTitle: "Our Principles: Transparent, Controllable, Portable",
      principles: [
        {
          title: "1) Bubble Tea Industry Only",
          desc: "We don't pursue \"works for any restaurant\", we only pursue making bubble tea shops more professional, stable, and replicable."
        },
        {
          title: "2) Data Belongs to Merchant, Exportable Anytime",
          desc: "Operational data is the merchant's core asset. We oppose locking customers in with contracts and data."
        },
        {
          title: "3) Transparent Payment, Account in Merchant's Name",
          desc: "We use mature payment systems like Stripe, payment accounts belong to merchants; fee structure is transparent, traceable, and reconcilable."
        },
        {
          title: "4) Integrated Loop, No Scattered Responsibility",
          desc: "Ordering, Online, Loyalty, Inventory, Labeling, Machine Integration, and Reports are completed in one system as much as possible, reducing multi-system blame games and operational loss."
        }
      ],
      resultsTitle: "Results We Bring (Not Feature Stacking)",
      results: [
        {
          title: "More Controllable Profit",
          desc: "Recipe Inventory (Cookbook Deduction) + Visible Waste + Clearer Cost Structure"
        },
        {
          title: "More Actionable Retention",
          desc: "Member Points/Stored Value/Gift Cards + Precise Reach (WhatsApp/SMS)"
        },
        {
          title: "More Stable Peaks",
          desc: "Online Ordering Queue Visibility + Completion Notification + Waterproof Labels Reduce Rework"
        },
        {
          title: "More Replicable Standardization",
          desc: "Tea Machine Integration & Exception Fallback Mechanism, Supporting Expansion & Franchising"
        },
        {
          title: "More Decisive Data",
          desc: "Reports & Export Capability by Channel/Product/Time/Store, Supporting \"Ecosystem Analysis\""
        }
      ],
      ctaTitle: "30-Minute Free Store Diagnosis (Plan First, Then System)",
      ctaDesc: "We provide a 30-minute free consultation, focusing on \"Low Price Impact, Thinning Profits, Low Retention, Peak Efficiency Chaos\", outputting an actionable checklist:\nMenu Structure Suggestions, Margin Checkpoints, Retention Actions, Peak Process Improvement Suggestions.\nYou will get clear next steps before deciding whether you need system implementation.",
      ctaBtn: "Book Demo / Get 30-min Free Consultation"
    }
  }
};
