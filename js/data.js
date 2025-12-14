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
            <h2 class="content-title">Khái niệm Cơ bản</h2>
            
            <div class="content-section-title">1. Cá nhân</div>
            <div class="content-highlight-box">
                <p>Cá nhân là con người cụ thể, sống trong những điều kiện lịch sử – xã hội nhất định.</p>
            </div>
            <ul>
                <li>Mang những đặc điểm sinh học và xã hội riêng.</li>
                <li>Không tồn tại biệt lập ngoài xã hội.</li>
            </ul>

            <div class="text-center my-3">
                <img src="assets/images/LyLuan.jpg" class="lesson-img" alt="Hình ảnh các nhà kinh điển Mác-Lênin">
                <p class="small text-white-50 fst-italic mt-1">Các nhà kinh điển của chủ nghĩa Mác - Lênin đại diện cho những cá nhân kiệt xuất.</p>
            </div>

            <div class="content-section-title">2. Xã hội</div>
            <div class="content-highlight-box">
                <p>Xã hội là tổng thể các mối quan hệ xã hội giữa con người với con người.</p>
            </div>
            <ul>
                <li>Bao gồm các quan hệ kinh tế, chính trị, văn hóa, xã hội.</li>
                <li>Là môi trường tồn tại và phát triển của cá nhân.</li>
            </ul>

            <div class="text-center my-3">
                <img src="assets/images/XaHoi.jpg" class="lesson-img" alt="Hình ảnh các nhà kinh điển Mác-Lênin">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>
        `
    },
    {
        id: "bai2",
        title: "Mối quan hệ biện chứng",
        content: `
            <h2 class="content-title">Quan hệ Cá nhân - Xã hội</h2>
            <p class="fst-italic text-warning mb-3">Triết học Mác – Lênin khẳng định đây là mối quan hệ hai chiều, tác động qua lại lẫn nhau.</p>

            <div class="content-section-title">1. Xã hội là điều kiện tồn tại của Cá nhân</div>
            <p>Cá nhân chỉ có thể hình thành và phát triển trong xã hội. Tách khỏi xã hội, cá nhân không thể tồn tại như một con người đúng nghĩa.</p>
            <p><strong>Ví dụ:</strong> Ngôn ngữ, tri thức, khoa học, đạo đức, pháp luật... đều là sản phẩm của đời sống xã hội. Một sinh viên muốn phát triển cần có nhà trường, thầy cô, giáo trình....</p>

            <div class="text-center my-3">
                <img src="assets/images/Celebrating.jpg" class="lesson-img" alt="Sự gắn kết cá nhân và tập thể">
                <p class="small text-white-50 fst-italic mt-1">Sự gắn kết hữu cơ giữa cá nhân (Lãnh tụ) và tập thể (Quần chúng) tạo nên sức mạnh xã hội.</p>
            </div>

            <div class="content-section-title">2. Cá nhân là động lực phát triển của Xã hội</div>
            <p>Xã hội không tồn tại bên ngoài con người mà được tạo nên từ hoạt động của các cá nhân. Lao động, sáng tạo của mỗi cá nhân góp phần thúc đẩy kinh tế, khoa học - công nghệ.</p>
            <p><strong>Ví dụ:</strong> Một kỹ sư công nghệ xây dựng phần mềm giúp nâng cao hiệu quả sản xuất, góp phần phát triển kinh tế xã hội.</p>

            <div class="text-center my-3">
                <img src="assets/images/DongLucPhatTrien.jpg" class="lesson-img" alt="Sự gắn kết cá nhân và tập thể">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>

            <div class="content-section-title">3. Quan hệ lợi ích</div>
            <div class="content-highlight-box">
                <p>Lợi ích cá nhân và lợi ích xã hội thống nhất nhưng không đồng nhất.</p>
            </div>
            <ul>
                <li><strong>Lợi ích cá nhân:</strong> Nhu cầu, mong muốn chính đáng của mỗi người.</li>
                <li><strong>Lợi ích xã hội:</strong> Lợi ích chung của cộng đồng, quốc gia, dân tộc.</li>
            </ul>
            <p>Muốn xã hội phát triển bền vững cần: Cá nhân tôn trọng lợi ích xã hội và Xã hội tạo điều kiện cho cá nhân phát triển.</p>

            <div class="text-center my-3">
                <img src="assets/images/QuanHeLoiIch.jpg" class="lesson-img" alt="Sự gắn kết cá nhân và tập thể">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>
        `
    },
    {
        id: "bai3",
        title: "Vai trò Quần chúng nhân dân",
        content: `
            <h2 class="content-title">Quần chúng nhân dân</h2>
            
            <div class="content-section-title">Định nghĩa</div>
            <p>Quần chúng nhân dân là những giai cấp, tầng lớp xã hội đông đảo; là lực lượng trực tiếp hoặc gián tiếp sản xuất của cải vật chất, tham gia hoạt động chính trị - xã hội và sáng tạo giá trị tinh thần.</p>
            <p class="text-info"><i class="bi bi-info-circle"></i> Họ không phải là "đám đông vô tổ chức", mà là chủ thể lịch sử có ý thức và lợi ích giai cấp.</p>

            <div class="text-center my-3">
                <img src="assets/images/QuanChungNhanDan.jpg" class="lesson-img" alt="Sức mạnh quần chúng nhân dân">
                <p class="small text-white-50 fst-italic mt-1">Quần chúng nhân dân là lực lượng đông đảo, quyết định thắng lợi của các cuộc cách mạng.</p>
            </div>

            <div class="content-section-title">Vai trò quyết định lịch sử</div>
            <ol>
                <li><strong>Sáng tạo của cải vật chất:</strong> Là lực lượng lao động chủ yếu, quyết định sự tồn tại và phát triển của xã hội. (Ví dụ: Nông dân, công nhân ).</li>
                <li><strong>Quyết định các cuộc cách mạng:</strong> Là lực lượng quyết định thành bại. Không có sự tham gia của quần chúng, cách mạng không thể thắng lợi. (Ví dụ: Cách mạng Tháng Tám 1945 thành công nhờ sự vùng dậy của toàn dân ).</li>
                <li><strong>Sáng tạo giá trị tinh thần:</strong> Văn hóa, ngôn ngữ, phong tục, nghệ thuật dân gian.... (Ví dụ: Ca dao, tục ngữ phản ánh trí tuệ và đời sống lao động).</li>
            </ol>

            <div class="text-center my-3">
                <img src="assets/images/QuyetDinhLichSu.jpg" class="lesson-img" alt="Sức mạnh quần chúng nhân dân">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>
        `
    },
    {
        id: "bai4",
        title: "Vai trò của Lãnh tụ",
        content: `
            <h2 class="content-title">Lãnh tụ trong Lịch sử</h2>

            <div class="content-section-title">Khái niệm Lãnh tụ</div>
            <div class="content-highlight-box">
                <p>Lãnh tụ là cá nhân kiệt xuất trong lịch sử, đại diện cho lợi ích căn bản của giai cấp, dân tộc.</p>
            </div>
            <p><strong>Năng lực cần có:</strong> Nhận thức đúng quy luật lịch sử, đề ra đường lối đúng đắn, và có khả năng tổ chức, dẫn dắt quần chúng.</p>

            <div class="text-center my-3">
                <img src="assets/images/R.jpg" class="lesson-img" alt="Lãnh tụ Lênin">
                <p class="small text-white-50 fst-italic mt-1">V.I. Lênin - Lãnh tụ thiên tài của giai cấp vô sản, người dẫn đường cho Cách mạng Tháng Mười.</p>
            </div>

            <div class="content-section-title">Vai trò của Lãnh tụ</div>
            <ul>
                <li>Định hướng mục tiêu, đường lối cách mạng.</li>
                <li>Tập hợp, tổ chức, giáo dục quần chúng.</li>
                <li>Kết nối sức mạnh của quần chúng thành hành động thống nhất.</li>
            </ul>

            <div class="text-center my-3">
                <img src="assets/images/LanhTu_MacLenin.jpg" class="lesson-img" alt="Lãnh tụ Lênin">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>

            <p><strong>Ví dụ:</strong> Chủ tịch Hồ Chí Minh đã tìm ra con đường cứu nước đúng đắn và lãnh đạo nhân dân Việt Nam giành độc lập.</p>
            
            <div class="alert alert-warning mt-3">
                <i class="bi bi-exclamation-triangle-fill"></i> <strong>Lưu ý:</strong> Lãnh tụ không thể thay thế quần chúng. Vai trò lãnh tụ chỉ phát huy khi gắn bó với nhân dân.
            </div>

            <div class="text-center my-3">
                <img src="assets/images/ChuTich_HCM.jpg" class="lesson-img" alt="Lãnh tụ Lênin">
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
            <p>Quần chúng nhân dân là những giai cấp, tầng lớp xã hội đông đảo; là lực lượng trực tiếp hoặc gián tiếp sản xuất của cải vật chất, tham gia hoạt động chính trị - xã hội và sáng tạo giá trị tinh thần.</p>
            <p class="text-info"><i class="bi bi-info-circle"></i> Họ không phải là "đám đông vô tổ chức", mà là chủ thể lịch sử có ý thức và lợi ích giai cấp.</p>

            <div class="text-center my-3">
                <img src="assets/images/QuanChungNhanDan.jpg" class="lesson-img" alt="Sức mạnh quần chúng nhân dân">
                <p class="small text-white-50 fst-italic mt-1">Quần chúng nhân dân là lực lượng đông đảo, quyết định thắng lợi của các cuộc cách mạng.</p>
            </div>

            <div class="content-section-title">Ý nghĩa Triết học</div>
            <ol>
                <li><strong>Sáng tạo của cải vật chất:</strong> Là lực lượng lao động chủ yếu, quyết định sự tồn tại và phát triển của xã hội. (Ví dụ: Nông dân, công nhân ).</li>
                <li><strong>Quyết định các cuộc cách mạng:</strong> Là lực lượng quyết định thành bại. Không có sự tham gia của quần chúng, cách mạng không thể thắng lợi. (Ví dụ: Cách mạng Tháng Tám 1945 thành công nhờ sự vùng dậy của toàn dân ).</li>
                <li><strong>Sáng tạo giá trị tinh thần:</strong> Văn hóa, ngôn ngữ, phong tục, nghệ thuật dân gian.... (Ví dụ: Ca dao, tục ngữ phản ánh trí tuệ và đời sống lao động).</li>
            </ol>

            <div class="text-center my-3">
                <img src="assets/images/QuyetDinhLichSu.jpg" class="lesson-img" alt="Sức mạnh quần chúng nhân dân">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>

            <div class="content-section-title">Ý nghĩa thực tiễn hiện nay</div>
            <ol>
                <li><strong>Sáng tạo của cải vật chất:</strong> Là lực lượng lao động chủ yếu, quyết định sự tồn tại và phát triển của xã hội. (Ví dụ: Nông dân, công nhân ).</li>
                <li><strong>Quyết định các cuộc cách mạng:</strong> Là lực lượng quyết định thành bại. Không có sự tham gia của quần chúng, cách mạng không thể thắng lợi. (Ví dụ: Cách mạng Tháng Tám 1945 thành công nhờ sự vùng dậy của toàn dân ).</li>
                <li><strong>Sáng tạo giá trị tinh thần:</strong> Văn hóa, ngôn ngữ, phong tục, nghệ thuật dân gian.... (Ví dụ: Ca dao, tục ngữ phản ánh trí tuệ và đời sống lao động).</li>
            </ol>

            <div class="text-center my-3">
                <img src="assets/images/QuyetDinhLichSu.jpg" class="lesson-img" alt="Sức mạnh quần chúng nhân dân">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>

        `
    }
];