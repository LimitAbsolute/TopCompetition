/**
 * 主界面表格数据
 */
const playerData = [{
        no: 0,
        weight: 0,
        path: "",
        data: [{
                photo: "1.jpg",
                name: "火龙",
                status: "S11退役",
                champion: "S1、S5、S7、S11",
                runnerUp: "S3、S9、S10",
                compete: "S1、S3、S4、S5、S6、S7、S9、S10、S11",
                info: `《大赛四冠王，伟大无需多言！》
                被粉丝称之为“战神”，可以随意切换自身的左右旋转来应对不同的对手。
                经过多年磨炼，技巧与耐力出类拔萃，成长为综合实力非常全面的进攻型旋手。
                取胜之道对于他来说只有一个字——干！伤痕累累的攻击环就是最好的证明。
                S11第四次夺冠，退役。在职业生涯的最后一战以伤残之躯飞龙在天，将中子星击飞，创造历史。
                他的旋转已不再是初见时的锋锐，进攻也似乎没有往日的压迫。陀芯断裂早有预警，舍弃装甲也要继续战斗！
                躯体的每一寸都磨损得不堪重负之时，意志带领着他杀出了重围！火龙以一道贯穿星辰、燃尽世界的烈焰，完美地结束了自己的职业生涯，也为龙年画上了完美的句号！
                P.S. 也有S2因超重被取消参赛资格后，赖在台上不肯走还飙垃圾话，被裁判驱逐出场的黑历史。`
            },
            {
                photo: "2.jpg",
                name: "翠神",
                status: "S11退役",
                champion: "S2",
                runnerUp: "S1、S4",
                compete: "S1、S2、S3、S4、S5、S6、S7、S8、S10、S11",
                info: `右旋旋手，速度型，擅长游走进攻，身法灵动飘逸。
                底盘超稳，动力强劲的击飞王。
                经验丰富，技战术储备一流，能在耐力型和攻击型当中自由切换。
                战术百科全书，战术大师，源源不断的进攻手段让观众眼花缭乱，层出不穷的招式让他的比赛异常精彩。
                S11退役。只要落入擂台，每一次的旋转他都竭尽全力，每一次战斗都坚持到了最后一刻。松散的零件声是躯壳的悲歌，也同样是意志的泵鸣！
                感谢他为我们带来这么多的战术、这么多的思路，还有这么多精彩的对局，让我们对老将致以敬意。
                希望他未来还有机会能以其他身份活跃在我们的联赛当中。`
            },
            {
                photo: "3.jpg",
                name: "风暴",
                status: "S13退役",
                champion: "S8",
                runnerUp: "S6、S7、S13",
                compete: "S1、S2、S3、S4、S6、S7、S8、S9、S10、S13",
                info: `右旋旋手，拥有强大的空气动力学和强悍的防御力，号称是最强的持久防御型旋手。
                技战术全面，防守反击犀利，击飞能力强劲。
                防守反击大师，最强之盾，战术储备非常丰富。
                和翠神曾经在同一个青训体系当过队友。
                S13决赛，传奇击飞王落下帷幕，这一次幸运女神并没有站在他的身边，命运仿佛给他开了一个大大的玩笑。
                他是绝对的天才旋手，不过在职业的巅峰时期遇到了另一个更恐怖的存在。
                有人说如果没有火龙，风暴就是最有可能成为传奇的那个旋手，但就像人们永远只会记住世界第一高峰一般，他的每一次刻苦训练、每一次受伤维修、每一次突破极限都显得无关紧要，这仿佛也是他职业生涯的缩影。
                竞技就是这么的残酷，这世界上只有一种真正的英雄主义，那就是认清生活的真相并依然热爱它。
                即使没有那么多人在意风暴依旧做好了每一次的训练，追求每一次的突破极限，享受了每一场的比赛。
                中轴碎裂之后，他依旧没有一丝犹豫，冲向了擂台，我们再次感谢他为我们带来如此多精彩的比赛。`
            },
            {
                photo: "4.jpg",
                name: "闪电",
                status: "在役",
                champion: "-",
                runnerUp: "-",
                compete: "S1、S2、S3、S4、S6",
                info: `左旋旋手，速度型，以吸能消耗、灵活躲闪为主，也是一位主打持久战、防守反击的防御型旋手。`
            }
        ],
        "description": "背景设定"
    },
    {
        no: 1,
        weight: 0,
        path: "BV1DS4y167wc",
        data: [{
            photo: "5.jpg",
            name: "水晶",
            status: "在役",
            champion: "-",
            runnerUp: "S2",
            compete: "S2、S3、S4、S5、S13",
            info: `S2出道时是当时唯一一位没有资本赞助和技师团队的独立旋手，左旋持久型，耐力也不容小觑。
            攻守兼备，奇招频出。`
        }],
        "description": ""
    },
    {
        no: 2,
        weight: 0,
        path: "BV1RK411S7T8",
        data: [{
                photo: "6.jpg",
                name: "萤火虫",
                status: "在役",
                champion: "S12",
                runnerUp: "S8",
                compete: "S3、S4、S8、S9、S11、S12、S13",
                info: `追求极致轻量化和高转速的进攻型旋手，擅长游击进攻、以点破面地干扰对手的平衡。
                风格诡异多变，擅长高速猛攻、多角度连打、空中连击，空中控制力非常强劲。`
            },
            {
                photo: "7.jpg",
                name: "中子星",
                status: "在役",
                champion: "S3、S4",
                runnerUp: "S5、S11",
                compete: "S3、S4、S5、S6、S7、S8、S9、S10、S11、S12、S13",
                info: `不知在何等极限环境下成长起来的顶级耐力型旋手，没有花哨的进攻和躲闪，身体就像黑洞一般，可以源源不断地吸收对手的转速，永远比对手晚一步停止转动。
                学习能力强，以消耗战为主，比赛中游击防守反击和进攻水平突飞猛进，针对不同的旋手有不同的进攻节奏。
                现在已经进化为攻守一体，综合能力极强的一位选手。
                似乎运气不佳。`
            },
        ],
        "description": "决赛积分最高的旋手自动跳过小组赛晋级"
    },
    {
        no: 3,
        weight: 0,
        path: "BV1xQ4y1873v",
        data: [{
            photo: "8.jpg",
            name: "霰弹枪",
            status: "在役",
            champion: "-",
            runnerUp: "-",
            compete: "S4、S5、S12",
            info: `轻量级的冠军旋手，技战术强悍，曾在轻量级打出碾压效果，是唯一一位增重跨级别参赛的旋手。`
        }, ],
        "description": "取消决赛积分晋级制，正式进入8人单败淘汰赛"
    },
    {
        no: 4,
        weight: 1,
        path: "BV14D421J7Rm",
        data: [{
                photo: "9.jpg",
                name: "绿魔",
                status: "在役",
                champion: "-",
                runnerUp: "-",
                compete: "S5",
                info: `传统击发器的大级别旋手。`
            },
            {
                photo: "10.jpg",
                name: "王朝",
                status: "在役",
                champion: "-",
                runnerUp: "-",
                compete: "S5、S7、S13",
                info: `传统击发器的大级别旋手，耐力型。`
            },
            {
                photo: "11.jpg",
                name: "爆丸",
                status: "在役",
                champion: "-",
                runnerUp: "-",
                compete: "S5、S6",
                info: `轻量级的爆发型强攻手。`
            },
        ],
        "description": ""
    },
    {
        no: 5,
        weight: 1,
        path: "BV1vm421N7Wz",
        data: [{
                photo: "12.jpg",
                name: "黑曜石",
                status: "S10升级为黑金刚",
                champion: "-",
                runnerUp: "-",
                compete: "S6、S7、S8、S9",
                info: `S6第一次打入8强，当时自称防御型高手、战术大师，但半决赛遇到火龙，2秒钟就被击飞。
                S7针对抗击打进行了强力升级，但被火龙直接击碎。从此以后，火龙成为其职业生涯的噩梦。
                屡败屡战、意志坚定、喜感十足、不可多得的搞笑型旋手，被观众戏称为“牢黑”“牢石”，但实力不容小觑，自创的自爆流打法曾直接终结了冥王的职业生涯。
                有只输给冠军之说。`
            },
            {
                photo: "13.jpg",
                name: "灰烬",
                status: "在役",
                champion: "S6",
                runnerUp: "-",
                compete: "S6、S7、S9",
                info: `S6唯一一位全自主研发团队的参赛旋手，出道即巅峰，极端防守型。`
            },
        ],
        "description": ""
    },
    {
        no: 6,
        weight: 1,
        path: "BV1dw4m1e71J",
        data: [{
            photo: "14.jpg",
            name: "狮鹫",
            status: "在役",
            champion: "-",
            runnerUp: "-",
            compete: "S7、S8、S10",
            info: `耐力型旋手，相比进攻更擅长防守反击。`
        }, ],
        "description": ""
    },
    {
        no: 7,
        weight: 1,
        path: "BV1hM4m117GV",
        data: [{
                photo: "15.jpg",
                name: "冥王",
                status: "S9退役",
                champion: "-",
                runnerUp: "-",
                compete: "S8、S9",
                info: `S8体型最小的旋手，擅长反规律移动、带起乱流，比较克制耐力型旋手。
                体积虽小，爆发力却绝对不弱。
                S9对抗黑曜石时中轴碎裂，无法复原，遗憾退役。`
            },
            {
                photo: "16.jpg",
                name: "甘露",
                status: "在役",
                champion: "-",
                runnerUp: "-",
                compete: "S8",
                info: `与颜值相反的力量充足的旋手，比起进攻，更擅长抗击打和防守。`
            },
        ],
        "description": "新引入半决赛BO3赛制、决赛BO5赛制"
    },
    {
        no: 8,
        weight: 1,
        path: "BV1dM4m1a789",
        data: [{
            photo: "17.jpg",
            name: "阎魔",
            status: "在役",
            champion: "S9、S10",
            runnerUp: "-",
            compete: "S9、S10、S11、S12、S13",
            info: `拥有恐怖的爆发力和极强的进攻欲望，在S9预选赛连续4场击飞对手，打出了统治级的水准。
            拥有超强的陀体控制力、抗击打能力、消耗能力以及非常强劲的击飞能力，打法非常细致。
            连续两次在BO5中战胜火龙。`
        }, ],
        "description": ""
    },
    {
        no: 9,
        weight: 1,
        path: "BV1Jn1DYhEcB",
        data: [{
                photo: "18.jpg",
                name: "火烧云",
                status: "在役",
                champion: "-",
                runnerUp: "-",
                compete: "S10",
                info: `防御型。`
            },
            {
                photo: "19.jpg",
                name: "黑金刚",
                status: "在役",
                champion: "-",
                runnerUp: "S12",
                compete: "S10、S11、S12",
                info: `黑曜石超级升级版，掌握了超级诡异吸能招式的旋手。
                团队资金非常雄厚，多次解体后重建实力都在不断上升。
                其团队声明：斥巨资为黑金刚进行了陀体强化，绝对不会被击碎。
                S11半决赛上成功击飞了一次即将退役的火龙，然后剩下两场都被火龙干了个底朝天。`
            }
        ],
        "description": ""
    },
    {
        no: 10,
        weight: 1,
        path: "BV12okmYtEzw",
        data: [{
                photo: "20.jpg",
                name: "大王乌贼",
                status: "在役",
                champion: "-",
                runnerUp: "-",
                compete: "S11",
                info: `拥有多条弹性触手，高速旋转时会张开，吸收周围的冲击，防御能力极强，一不小心就会被他耗光转速。`
            },
            {
                photo: "21.jpg",
                name: "六道光牢",
                status: "在役",
                champion: "-",
                runnerUp: "-",
                compete: "S11",
                info: `超级防御悍将，S11预选赛上以强硬的防守战胜了风暴，主打一个字——硬。`
            },
        ],
        "description": "第一届超级无敌热血激情陀螺争霸赛收官之战"
    },
    {
        no: 11,
        weight: 3,
        path: "BV1M8jAzEE4c",
        data: [{
                photo: "22.jpg",
                name: "蓝鳍鲨",
                status: "在役",
                champion: "-",
                runnerUp: "-",
                compete: "S12",
                info: `防守悍将。
                S13体重超标，未能参赛。`
            },
            {
                photo: "23.jpg",
                name: "青冥星璇",
                status: "在役",
                champion: "-",
                runnerUp: "-",
                compete: "S12",
                info: `暂无。`
            },
            {
                photo: "24.jpg",
                name: "冰魄流云",
                status: "在役",
                champion: "-",
                runnerUp: "-",
                compete: "S12",
                info: `偏稳健。`
            },
        ],
        "description": "扩增三种量级，分级对抗；新引入双败赛制；新竞技台"
    },
    {
        no: 12,
        weight: 3,
        path: "BV1zc7Tz2EhX",
        data: [{
            photo: "25.jpg",
            name: "穿云箭",
            status: "在役",
            champion: "S13",
            runnerUp: "-",
            compete: "S13",
            info: `S13全新时代的陀体，唯一一位采用剑式发射器的旋手。`
        }],
        "description": "回归传统蓝色竞技台；胜者组进入决赛的旋手有一次晚入场的机会(1秒)"
    },
];