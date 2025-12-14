// --- FILE: js/data.js ---

// 1. CÂU HỎI KHỞI ĐẦU (PHASE 1)
const initialQuestions = [
    {
        id: 1,
        title: "Tình huống 1: Bản chất con người",
        content: "Đại dịch bùng phát, lương thực khan hiếm. Hàng xóm già yếu đang thiếu thuốc. Bạn sẽ làm gì?",
        source: "Lý luận: Con người là thực thể thống nhất giữa mặt sinh vật và mặt xã hội (Trang 465).",
        options: [
            { 
                text: "Giữ cho mình. 'Quy luật sinh tồn là trên hết'.", 
                stats: { knowledge: 3, social: -6, impact: 0 },
                explanation: "Bạn đang tuyệt đối hóa phương diện sinh học (bản năng sinh tồn). Tuy nhiên, theo triết học Mác - Lênin: 'Con người là tổng hòa các quan hệ xã hội'. Tách rời cá nhân khỏi xã hội là một sai lầm về mặt phương pháp luận (Trang 466)."
            },
            { 
                text: "Chia sẻ và kêu gọi xóm giềng giúp đỡ nhau.", 
                stats: { knowledge: 0, social: 6, impact: 3 },
                explanation: "Rất tốt. Bạn đã thể hiện đúng bản chất xã hội của con người. Sức mạnh của cộng đồng sẽ giúp từng cá nhân tồn tại tốt hơn. Đây là biểu hiện của tính nhân loại cao cả (Trang 467)."
            },
            { 
                text: "Nghiên cứu phương án phân phối khoa học để đề xuất.", 
                stats: { knowledge: 9, social: 0, impact: 3 },
                explanation: "Bạn sử dụng tư duy lý tính (đặc trưng của con người) để cải biến hoàn cảnh. Con người không chỉ thích nghi thụ động mà còn chủ động cải tạo điều kiện sinh tồn."
            }
        ]
    },
    {
        id: 2,
        title: "Tình huống 2: Quan hệ Cá nhân và Tập thể",
        content: "Bạn giỏi nhất nhóm, nhưng các thành viên khác làm chậm tiến độ. Bạn chọn:",
        source: "Lý luận: Tránh khuynh hướng cực đoan trong quan hệ cá nhân - xã hội (Trang 469).",
        options: [
            { 
                text: "Tách ra làm riêng cho nhanh.", 
                stats: { knowledge: 6, social: -6, impact: 0 },
                explanation: "Bạn đang rơi vào chủ nghĩa cá nhân cực đoan. Giáo trình (Trang 469) chỉ rõ: 'Nếu đặt cá nhân lên trên xã hội... thì đều sai lầm và dẫn đến hệ lụy khó lường'."
            },
            { 
                text: "Làm giúp phần của họ để cả nhóm cùng qua môn.", 
                stats: { knowledge: -3, social: 9, impact: 0 },
                explanation: "Bạn đề cao tập thể nhưng lại triệt tiêu tính năng động của các cá nhân khác. Xã hội phát triển cần sự nỗ lực của từng cá thể."
            },
            { 
                text: "Tổ chức lại quy trình, phân công người giỏi kèm người yếu.", 
                stats: { knowledge: 3, social: 6, impact: 9 },
                explanation: "Chính xác. Đây là sự kết hợp hài hòa: 'Sự phát triển tự do của mỗi cá nhân là điều kiện cho sự phát triển của tất cả'. Bạn có tố chất lãnh đạo."
            }
        ]
    },
    {
        id: 3,
        title: "Tình huống 3: Nguồn gốc Lịch sử",
        content: "Theo bạn, yếu tố nào quyết định sự phát triển của đất nước?",
        source: "Lý luận: Vai trò của Quần chúng nhân dân (Trang 473).",
        options: [
            { 
                text: "Do các vĩ nhân, lãnh đạo kiệt xuất dẫn dắt.", 
                stats: { knowledge: 3, social: -3, impact: 6 },
                explanation: "Đây là quan điểm Duy tâm về lịch sử (Trang 470). Lãnh tụ có vai trò quan trọng, nhưng 'cách mạng là sự nghiệp của quần chúng'. Tuyệt đối hóa lãnh tụ dẫn đến tệ sùng bái cá nhân."
            },
            { 
                text: "Do người lao động sản xuất của cải vật chất hàng ngày.", 
                stats: { knowledge: 3, social: 9, impact: 0 },
                explanation: "Chính xác. 'Quần chúng nhân dân là lực lượng sản xuất cơ bản, là người sáng tạo chân chính ra lịch sử' (Trang 473)."
            },
            { 
                text: "Do sự phát triển tất yếu của khoa học kỹ thuật.", 
                stats: { knowledge: 9, social: 0, impact: 3 },
                explanation: "Khoa học kỹ thuật là động lực quan trọng, nhưng chủ thể nắm giữ và sử dụng nó vẫn là con người (quần chúng nhân dân)."
            }
        ]
    },
    {
        id: 4,
        title: "Tình huống 4: Tính Giai cấp",
        content: "Thấy ông chủ giàu có chèn ép người lao động nghèo, bạn sẽ:",
        source: "Lý luận: Tính giai cấp và tính nhân loại (Trang 467).",
        options: [
            { 
                text: "Im lặng, đó là quy luật thị trường.", 
                stats: { knowledge: 0, social: -6, impact: -3 },
                explanation: "Bạn đang lờ đi 'tính giai cấp' trong các quan hệ xã hội. Trong xã hội có phân chia giai cấp, thái độ trung lập thực chất là ủng hộ giai cấp thống trị."
            },
            { 
                text: "Viết bài phân tích lên mạng xã hội.", 
                stats: { knowledge: 9, social: 3, impact: 3 },
                explanation: "Bạn sử dụng vũ khí lý luận để đấu tranh tư tưởng. Đây là một hình thức đấu tranh giai cấp quan trọng."
            },
            { 
                text: "Tập hợp người lao động đấu tranh đòi quyền lợi.", 
                stats: { knowledge: 0, social: 6, impact: 9 },
                explanation: "Hành động thực tiễn! Bạn đang tham gia trực tiếp vào phong trào quần chúng để giải quyết mâu thuẫn giai cấp."
            }
        ]
    },
    {
        id: 5,
        title: "Tình huống 5: Xuất hiện Lãnh tụ",
        content: "Tổ chức đang hoảng loạn, mất phương hướng. Bạn sẽ:",
        source: "Lý luận: Lãnh tụ xuất hiện từ phong trào quần chúng (Trang 475).",
        options: [
            { 
                text: "Chờ xem có ai tài giỏi đứng ra không.", 
                stats: { knowledge: 0, social: -3, impact: -3 },
                explanation: "Thụ động. Lãnh tụ không tự nhiên sinh ra, mà xuất hiện từ nhu cầu của phong trào quần chúng (Trang 475)."
            },
            { 
                text: "Tự tìm đường thoát thân cho mình trước.", 
                stats: { knowledge: 6, social: -9, impact: 0 },
                explanation: "Ích kỷ. Bạn tách rời lợi ích cá nhân khỏi lợi ích tập thể."
            },
            { 
                text: "Đứng lên trấn an, vạch kế hoạch và phân công nhiệm vụ.", 
                stats: { knowledge: 6, social: 6, impact: 12 },
                explanation: "Tuyệt vời. 'Khi lịch sử đặt ra những nhiệm vụ cần giải quyết... thì từ trong quần chúng sẽ xuất hiện những lãnh tụ' (Trang 475). Bạn chính là nhân tố đó."
            }
        ]
    }
];

// 2. DANH SÁCH 8 NGHỀ NGHIỆP (ĐÃ CẬP NHẬT ĐỦ)
const careers = [
    { id: "leader", name: "Nhà Lãnh đạo", description: "Cần trí tuệ vạch chiến lược và ảnh hưởng để dẫn dắt phong trào.", statsReq: { knowledge: 15, social: 10, impact: 20 } },
    { id: "tech", name: "Công nghệ / Kỹ thuật", description: "Đại diện Lực lượng sản xuất. Tư duy logic sắc bén.", statsReq: { knowledge: 20, social: 5, impact: 10 } },
    { id: "worker", name: "Lao động Sản xuất", description: "Sức mạnh nằm ở tính tập thể và trực tiếp tạo ra của cải.", statsReq: { knowledge: 5, social: 20, impact: 10 } },
    { id: "educator", name: "Nhà Giáo dục", description: "Tri thức uyên thâm và khả năng truyền đạt, kết nối con người.", statsReq: { knowledge: 18, social: 15, impact: 5 } },
    { id: "healthcare", name: "Nhân viên Y tế", description: "Cần chuyên môn nhưng quan trọng nhất là tính nhân loại.", statsReq: { knowledge: 10, social: 18, impact: 10 } },
    { id: "public_servant", name: "Cán bộ / Công chức", description: "Người điều phối xã hội, cần sự khéo léo và hòa hợp lợi ích.", statsReq: { knowledge: 10, social: 15, impact: 8 } },
    { id: "artist", name: "Nghệ sĩ / Sáng tạo", description: "Thiên về cái 'Tôi' độc đáo và tư duy trừu tượng.", statsReq: { knowledge: 15, social: 5, impact: 10 } },
    { id: "activist", name: "Nhà Hoạt động Xã hội", description: "Tập hợp quần chúng và hành động quyết liệt thay đổi thực tại.", statsReq: { knowledge: 8, social: 15, impact: 18 } }
];

// 3. KỊCH BẢN CHUYÊN MÔN (PHASE 2 - ĐỦ 8 NGHỀ)
const careerScenarios = {
    leader: [
        {
            title: "Quyết định sống còn",
            content: "Để phát triển kinh tế, cần giải tỏa đất của dân. Dân phản đối. Bạn làm gì?",
            options: [
                { text: "Cưỡng chế ngay! Mục tiêu là trên hết.", stats: { knowledge: 2, social: -5, impact: 2 }, message: "Độc đoán, xa rời quần chúng." },
                { text: "Đối thoại, đền bù thỏa đáng và thuyết phục dân.", stats: { knowledge: 2, social: 3, impact: 3 }, message: "Thống nhất lợi ích lãnh tụ và quần chúng." }
            ]
        }
    ],
    tech: [
        {
            title: "AI và Con người",
            content: "AI của bạn giúp tăng lợi nhuận nhưng làm 1000 người thất nghiệp.",
            options: [
                { text: "Triển khai ngay, hiệu quả là số 1.", stats: { knowledge: 3, social: -4, impact: 1 }, message: "Phát triển LLSX nhưng phá vỡ QHSX." },
                { text: "Triển khai kèm kế hoạch đào tạo lại nghề.", stats: { knowledge: 2, social: 3, impact: 2 }, message: "Phát triển vì con người." }
            ]
        }
    ],
    worker: [
        {
            title: "Sáng kiến hay Tuân thủ?",
            content: "Bạn tìm ra cách làm mới năng suất gấp đôi nhưng khác quy trình chuẩn.",
            options: [
                { text: "Làm theo quy trình cho lành.", stats: { knowledge: -1, social: 0, impact: -2 }, message: "Thụ động." },
                { text: "Đề xuất cải tiến với tập thể.", stats: { knowledge: 2, social: 2, impact: 3 }, message: "Quần chúng là nguồn gốc sáng tạo." }
            ]
        }
    ],
    public_servant: [
        {
            title: "Quy tắc hay Linh hoạt",
            content: "Dân nghèo làm thủ tục thiếu 1 giấy tờ nhỏ. Theo luật phải trả hồ sơ.",
            options: [
                { text: "Trả hồ sơ, đúng luật mà làm.", stats: { knowledge: 1, social: -3, impact: 0 }, message: "Quan liêu, máy móc." },
                { text: "Hướng dẫn bổ sung sau, giải quyết trước.", stats: { knowledge: 1, social: 3, impact: 2 }, message: "Vì nhân dân phục vụ." }
            ]
        }
    ],
    healthcare: [
        {
            title: "Lựa chọn sinh tử",
            content: "Chỉ còn 1 máy thở. Bệnh nhân A là nhà tài trợ giàu có, B là công nhân nghèo.",
            options: [
                { text: "Cứu nhà tài trợ vì lợi ích viện.", stats: { knowledge: 1, social: -4, impact: 1 }, message: "Tính giai cấp lấn át nhân đạo." },
                { text: "Cứu dựa trên chỉ số y học, không phân biệt.", stats: { knowledge: 2, social: 3, impact: 2 }, message: "Công bằng và nhân văn." }
            ]
        }
    ],
    educator: [
        {
            title: "Tư duy phản biện",
            content: "Học sinh hỏi câu hỏi nhạy cảm trái với giáo trình.",
            options: [
                { text: "Gạt đi, yêu cầu học thuộc lòng.", stats: { knowledge: -2, social: -1, impact: -1 }, message: "Giáo điều." },
                { text: "Khuyến khích thảo luận đa chiều.", stats: { knowledge: 3, social: 2, impact: 2 }, message: "Phát triển tư duy tự do." }
            ]
        }
    ],
    artist: [
        {
            title: "Nghệ thuật vị nhân sinh",
            content: "Nhà tài trợ muốn bạn vẽ tranh ca ngợi giới thượng lưu xa hoa.",
            options: [
                { text: "Vẽ thôi, có tiền là được.", stats: { knowledge: 0, social: -3, impact: 1 }, message: "Nghệ thuật thoát ly thực tại." },
                { text: "Vẽ về cuộc sống người lao động bình dị.", stats: { knowledge: 2, social: 3, impact: 2 }, message: "Nghệ thuật bắt nguồn từ đời sống." }
            ]
        }
    ],
    activist: [
        {
            title: "Phương pháp đấu tranh",
            content: "Nhà máy xả thải gây ô nhiễm. Chính quyền chậm giải quyết.",
            options: [
                { text: "Kích động đập phá nhà máy.", stats: { knowledge: -2, social: -4, impact: 2 }, message: "Manh động, vô chính phủ." },
                { text: "Thu thập bằng chứng, kiện ra tòa.", stats: { knowledge: 3, social: 2, impact: 3 }, message: "Đấu tranh hợp pháp, khoa học." }
            ]
        }
    ],
    default: [
        {
            title: "Thử thách chung",
            content: "Bạn gặp khó khăn trong công việc. Bạn sẽ:",
            options: [
                { text: "Tự mình giải quyết.", stats: { knowledge: 1, social: -1, impact: 0 }, message: "Độc lập." },
                { text: "Nhờ đồng nghiệp hỗ trợ.", stats: { knowledge: 0, social: 2, impact: 1 }, message: "Hợp tác." }
            ]
        }
    ]
};

// 4. KẾT CỤC (ENDINGS)
const finalEndings = {
    true_ending: {
        title: "NHÀ KIẾN TẠO LỊCH SỬ",
        subtitle: "True Ending",
        content: "Chúc mừng! Bạn đã đạt đến sự thống nhất biện chứng. Bạn hiểu rằng 'Sự phát triển tự do của mỗi cá nhân là điều kiện cho sự phát triển của tất cả'. Bạn vừa có tài năng (Cái Riêng), vừa gắn bó máu thịt với quần chúng (Cái Chung).",
        color: "success",
        icon: "🏆"
    },
    bad_ending_isolation: {
        title: "THIÊN TÀI CÔ ĐỘC",
        subtitle: "Bad Ending: Xa rời quần chúng",
        content: "Bạn có trí tuệ xuất chúng nhưng lại rơi vào chủ nghĩa cá nhân cực đoan. Bạn cô đơn trên đỉnh cao vì đã quên rằng: Con người là tổng hòa các mối quan hệ xã hội.",
        color: "warning",
        icon: '<i class="bi bi-cloud-drizzle-fill"></i>'
    },
    bad_ending_passive: {
        title: "CỖ MÁY VÔ HỒN",
        subtitle: "Bad Ending: Thiếu bản lĩnh",
        content: "Bạn hòa đồng nhưng thiếu tư duy phản biện. Bạn bị dòng chảy lịch sử cuốn đi thay vì định hướng nó. Bạn cần rèn luyện thêm tính chủ động của chủ thể.",
        color: "secondary",
        icon: '<i class="bi bi-robot"></i>'
    },
    bad_ending_tyrant: {
        title: "KẺ ĐỘC TÀI DUY Ý CHÍ",
        subtitle: "Bad Ending: Phản dân chủ",
        content: "Bạn có quyền lực nhưng đi ngược lại lợi ích nhân dân. 'Cách mạng là sự nghiệp của quần chúng', thiếu sự ủng hộ của họ, quyền lực của bạn chỉ là lâu đài trên cát.",
        color: "danger",
        icon: '<i class="bi bi-person-x-fill"></i>'
    }
};
// --- DỮ LIỆU GIÁO TRÌNH (TEXTBOOK DATA) ---
const textbookData = [
    {
        id: "bai1",
        title: "Khái niệm Cá nhân và Xã hội",
        content: `
            <h2 class="content-title">1. Khái niệm Cơ bản</h2>
            
            <div class="content-section-title">Cá nhân</div>
            <div class="content-highlight-box">
                <p>Cá nhân là con người cụ thể sống trong một xã hội nhất định và được phân biệt với các cá thể khác thông qua những cái riêng, cái đơn nhất, đặc thù của cá thể (kinh nghiệm, tâm lý, trí tuệ...).</p>
            </div>
            <p><strong>Đặc điểm:</strong> Được quy định bởi những điều kiện sống và đặc điểm sinh học riêng biệt.</p>

            <div class="text-center my-3">
                <img src="assets/images/LyLuan.jpg" class="lesson-img" alt="Cá nhân trong xã hội">
                <p class="small text-white-50 fst-italic mt-1">Các nhà kinh điển của chủ nghĩa Mác - Lênin đại diện cho những cá nhân kiệt xuất.</p>
            </div>

            <div class="p-3 bg-dark border border-secondary rounded mt-2">
                <strong>Ví dụ:</strong> Một sinh viên FPT (cá nhân) có mã số sinh viên riêng, tính cách riêng, đang học tập và rèn luyện trong môi trường Đại học FPT.
            </div>

            <div class="content-section-title">Xã hội</div>
            <div class="content-highlight-box">
                <p>Xã hội do các cá nhân cụ thể hợp thành. Mỗi cá nhân là một phần tử của xã hội, sống và hoạt động trong xã hội đó.</p>
            </div>

            <div class="text-center my-3">
                <img src="assets/images/XaHoi.jpg" class="lesson-img" alt="Hình ảnh các nhà kinh điển Mác-Lênin">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>

            <div class="p-3 bg-dark border border-secondary rounded mt-2">
                <strong>Ví dụ:</strong> Trường Đại học (xã hội thu nhỏ) được tạo thành từ hàng ngàn sinh viên, giảng viên và cán bộ nhân viên. Không có những con người này thì không có trường Đại học.
            </div>
        `
    },
    {
        id: "bai2",
        title: "Mối quan hệ biện chứng Cá nhân - Xã hội",
        content: `
            <h2 class="content-title">2. Mối quan hệ biện chứng</h2>
            <p class="fst-italic text-warning mb-3">Cá nhân và xã hội có mối quan hệ biện chứng với nhau, trong đó xã hội giữ vai trò quyết định.</p>

            <div class="content-section-title">Vai trò quyết định của Xã hội</div>
            <div class="text-center my-3">
                <img src="assets/images/ab.png" class="lesson-img" alt="Sự gắn kết cá nhân và tập thể">
            </div>
            <p>Cá nhân và xã hội có mối quan hệ biện chứng với nhau, trong đó xã hội giữ vai trò quyết định vì:</p>
            <ul>
                <li>Sự tồn tại của cá nhân không thể tách rời xã hội.</li>
                <li>Nhu cầu và lợi ích cá nhân được thể hiện thông qua các quan hệ xã hội (QHXH).</li>
                <li>Qua QHXH, sức mạnh cá nhân mới được phát huy.</li>
            </ul>

            <div class="text-center my-3">
                <img src="assets/images/Celebrating.jpg" class="lesson-img" alt="Sự gắn kết cá nhân và tập thể">
                <p class="small text-white-50 fst-italic mt-1">Sự gắn kết hữu cơ giữa cá nhân (Lãnh tụ) và tập thể (Quần chúng) tạo nên sức mạnh xã hội.</p>
            </div>

            <div class="p-3 bg-dark border border-secondary rounded mt-2">
                <strong>Ví dụ:</strong> Mạng xã hội (XH) tạo nền tảng kết nối. Nếu không có cộng đồng người dùng, một tài khoản Facebook cá nhân sẽ trở nên vô nghĩa.
            </div>

            <div class="content-section-title">Vai trò của Cá nhân</div>
            <div class="text-center my-3">
                <img src="assets/images/ba.png" class="lesson-img" alt="Sự gắn kết cá nhân và tập thể">
            </div>
            <ul>
                <li>Lợi ích là nền tảng của mối quan hệ giữa cá nhân và xã hội.</li>
                <li>Xã hội càng phát triển thì mỗi cá nhân càng có điều kiện được đáp ứng những nhu cầu chính đáng.</li>
                <li>Nhân cách cá nhân phát triển góp phần vào sự phát triển của xã hội.</li>
            </ul>

            <div class="text-center my-3">
                <img src="assets/images/QuanHeLoiIch.jpg" class="lesson-img" alt="Sự gắn kết cá nhân và tập thể">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>

            <div class="content-section-title">Ý nghĩa nghiên cứu</div>
            <div class="content-highlight-box">
                <p>Cần tránh hai khuynh hướng cực đoan:</p>
                <ol>
                    <li>Tuyệt đối hóa lợi ích cá nhân, phủ nhận lợi ích tập thể (Chủ nghĩa cá nhân).</li>
                    <li>Nhân danh lợi ích tập thể để phủ nhận lợi ích chính đáng của cá nhân (Thủ tiêu động lực).</li>
                </ol>
            </div>
        `
    },
    {
        id: "bai3",
        title: "Vai trò Quần chúng nhân dân",
        content: `
            <h2 class="content-title">3. Vai trò Quần chúng nhân dân (QCND)</h2>
            
            <div class="content-section-title">Khái niệm QCND</div>
            <p>QCND là bộ phận có cùng chung lợi ích căn bản, bao gồm những thành phần, tầng lớp, giai cấp liên kết lại thành tập thể dưới sự lãnh đạo của một cá nhân/tổ chức nhằm giải quyết các vấn đề kinh tế, chính trị, xã hội.</p>
            <p><strong>Nội hàm:</strong></p>
            <ul>
                <li>Lao động sản xuất ra của cải vật chất và giá trị tinh thần.</li>
                <li>Chống lại giai cấp thống trị áp bức, bóc lột.</li>
                <li>Thúc đẩy sự tiến bộ xã hội.</li>
            </ul>

            <div class="text-center my-3">
                <img src="assets/images/QuanChungNhanDan.jpg" class="lesson-img" alt="Sức mạnh quần chúng nhân dân">
                <p class="small text-white-50 fst-italic mt-1">Quần chúng nhân dân là lực lượng đông đảo, quyết định thắng lợi của các cuộc cách mạng.</p>
            </div>

            <div class="content-section-title">Vai trò trong lịch sử</div>
            <div class="content-highlight-box">
                <p>QCND là chủ thể sáng tạo chân chính ra lịch sử, lực lượng quyết định sự phát triển của lịch sử.</p>
            </div>
            <ol>
                <li><strong>Lực lượng sản xuất cơ bản:</strong> Trực tiếp tạo ra của cải vật chất nuôi sống xã hội.</li>
                <li><strong>Sáng tạo giá trị tinh thần:</strong> Tác giả của văn hóa dân gian, nghệ thuật, phong tục tập quán.</li>
                <li><strong>Động lực cơ bản của mọi cuộc cách mạng:</strong> Quyết định thắng lợi của các cuộc đấu tranh xã hội.</li>
            </ol>

            <div class="text-center my-3">
                <img src="assets/images/QuyetDinhLichSu.jpg" class="lesson-img" alt="Sức mạnh quần chúng nhân dân">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>

            <div class="p-3 bg-dark border border-secondary rounded mt-2">
                <strong>Ví dụ:</strong> Nông dân Việt Nam vừa là lực lượng sản xuất lúa gạo (vật chất), vừa sáng tạo ra dân ca, hò vè (tinh thần), và là nòng cốt trong các cuộc kháng chiến giữ nước (cách mạng).
            </div>

            <div class="text-center my-3">
                <img src="assets/images/NDVN.jpg" class="lesson-img" alt="Sức mạnh quần chúng nhân dân">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>


        `
    },
    {
        id: "bai4",
        title: "Vai trò của Lãnh tụ và Mối quan hệ biện chứng QCND & Lãnh tụ",
        content: `
            <h2 class="content-title">4. Vai trò của Lãnh tụ</h2>

            <div class="content-section-title">Khái niệm</div>
            <ul>
                <li><strong>Vĩ nhân:</strong> Những cá nhân kiệt xuất trong các lĩnh vực chính trị, kinh tế, khoa học, nghệ thuật...</li>
                <li><strong>Lãnh tụ:</strong> Những cá nhân kiệt xuất do phong trào cách mạng của QCND tạo nên, gắn bó mật thiết với QCND.</li>
            </ul>
            <div class="content-highlight-box">
                <p><strong>Phẩm chất của Lãnh tụ:</strong></p>
                <ul>
                    <li>Có tri thức khoa học uyên bác, nắm bắt xu thế thời đại.</li>
                    <li>Có năng lực tập hợp, thống nhất ý chí và hành động của QCND.</li>
                    <li>Gắn bó mật thiết, hy sinh vì lợi ích của QCND.</li>
                </ul>
            </div>

            <div class="text-center my-3">
                <img src="assets/images/R.jpg" class="lesson-img" alt="Lãnh tụ Lênin">
                <p class="small text-white-50 fst-italic mt-1">V.I. Lênin - Lãnh tụ thiên tài của giai cấp vô sản.</p>
            </div>

            <div class="content-section-title">Vai trò của Lãnh tụ</div>
            <ul>
                <li><strong>Thúc đẩy:</strong> Nếu hành động theo quy luật khách quan, họ thúc đẩy sự phát triển của phong trào và xã hội.</li>
                <li><strong>Kìm hãm:</strong> Nếu hành động trái quy luật, họ có thể kìm hãm hoặc làm lịch sử phát triển quanh co.</li>
                <li><strong>Tổ chức:</strong> Sáng lập và điều hành các tổ chức quần chúng.</li>
            </ul>

            <div class="text-center my-3">
                <img src="assets/images/LanhTu_MacLenin.jpg" class="lesson-img" alt="Lãnh tụ Lênin">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>
            
            <div class="p-3 bg-dark border border-secondary rounded mt-2">
                <strong>Ví dụ:</strong> Chủ tịch Hồ Chí Minh đã nắm bắt đúng xu thế thời đại (giải phóng dân tộc gắn liền với CNXH), tập hợp toàn dân tộc và đưa cách mạng Việt Nam đến thắng lợi.
            </div>

            <div class="text-center my-3">
                <img src="assets/images/ChuTich_HCM.jpg" class="lesson-img" alt="Lãnh tụ Lênin">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>

            <div class="alert alert-warning mt-3">
                <i class="bi bi-exclamation-triangle-fill"></i> <strong>Lưu ý:</strong> Lãnh tụ không thể thay thế quần chúng. Vai trò lãnh tụ chỉ phát huy khi gắn bó với nhân dân.
            </div>

            <h2 class="content-title">Mối quan hệ thống nhất biện chứng</h2>

            <div class="content-section-title">Nội dung mối quan hệ:</div>
            <div class="text-center my-3">
                <img src="assets/images/bc.png" class="lesson-img" alt="Sự gắn kết cá nhân và tập thể">
            </div>
            <ol>
                <li>Mục đích và lợi ích của QCND và lãnh tụ là thống nhất.</li>
                <li>QCND và phong trào của họ tạo nên các lãnh tụ; tạo điều kiện, tiền đề khách quan để lãnh tụ xuất hiện và hoàn thành nhiệm vụ.</li>
                <li>Lãnh tụ là sản phẩm của thời đại, của cộng đồng. Sự xuất hiện và khả năng giải quyết nhiệm vụ của họ sẽ thúc đẩy (nhanh/chậm) sự vận động của phong trào QCND.</li>
            </ol>

            <div class="text-center my-3">
                <img src="assets/images/QHBC2.jpg" class="lesson-img" alt="Sự thống nhất ý chí">
                <p class="small text-white-50 fst-italic mt-1">Lãnh tụ và Quần chúng hòa làm một trong niềm vui chiến thắng.</p>
            </div>

            <div class="p-3 bg-dark border border-secondary rounded mt-2">
                <strong>Ví dụ tổng kết:</strong> Chủ tịch Hồ Chí Minh (Lãnh tụ) ra đi tìm đường cứu nước là đáp ứng yêu cầu của lịch sử dân tộc. Người đã tập hợp, giáo dục QCND, thành lập Đảng. Ngược lại, chính sức mạnh đoàn kết của QCND Việt Nam đã hiện thực hóa đường lối của Người, làm nên thắng lợi Cách mạng.
            </div>

            <div class="text-center my-3">
                <img src="assets/images/QCNDVN.jpg" class="lesson-img" alt="Lãnh tụ Lênin">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>
        `
    },
    {
        id: "bai5",
        title: "Ý nghĩa lý luận và bài học thực tiễn (CQ)",
        content: `
            <h2 class="content-title">Hiểu câu nói: "Sự phát triển tự do của mỗi cá nhân là điều kiện cho sự phát triển tự do của tất cả mọi người."</h2>

            <div class="content-section-title">Giải thích nội dung câu nói</div>

            <div class="content-section-title">Ý nghĩa Triết học</div>

            <div class="content-section-title">Ý nghĩa thực tiễn hiện nay</div>

        `
    }
];