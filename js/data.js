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
                explanation: "Cảnh báo: Bạn đang rơi vào chủ nghĩa cá nhân cực đoan. Giáo trình (Trang 469) chỉ rõ: 'Nếu đặt cá nhân lên trên xã hội... thì đều sai lầm và dẫn đến hệ lụy khó lường'."
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
        id: "chuong1",
        title: "Chương 1: Khái luận về Triết học",
        content: `
            <h3 class="text-warning border-bottom border-secondary pb-2 mb-4">I. TRIẾT HỌC VÀ VẤN ĐỀ CƠ BẢN</h3>
            <p><strong>1. Khái lược về triết học:</strong> Triết học là hệ thống quan điểm lý luận chung nhất về thế giới và vị trí con người trong thế giới đó.</p>
            <p><strong>2. Vấn đề cơ bản:</strong> Vấn đề cơ bản lớn của mọi triết học, đặc biệt là triết học hiện đại, là vấn đề quan hệ giữa tư duy và tồn tại (giữa ý thức và vật chất).</p>
            <div class="alert alert-dark border border-warning mt-3">
                <i class="bi bi-lightbulb text-warning"></i> <strong>Lưu ý:</strong> Đây là cơ sở để phân chia thành Chủ nghĩa Duy vật và Chủ nghĩa Duy tâm.
            </div>
        `
    },
    {
        id: "chuong2",
        title: "Chương 2: Chủ nghĩa Duy vật Biện chứng",
        content: `
            <h3 class="text-warning border-bottom border-secondary pb-2 mb-4">I. VẬT CHẤT VÀ Ý THỨC</h3>
            <h5 class="text-info">1. Vật chất</h5>
            <p>"Vật chất là một phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác..." - V.I. Lênin.</p>
            <h5 class="text-info mt-4">2. Nguồn gốc của Ý thức</h5>
            <p>Ý thức có hai nguồn gốc: <strong>Nguồn gốc tự nhiên</strong> (bộ óc người và thế giới khách quan) và <strong>Nguồn gốc xã hội</strong> (lao động và ngôn ngữ).</p>
        `
    },
    {
        id: "chuong3",
        title: "Chương 3: CN Duy vật Lịch sử (Cốt lõi Game)",
        content: `
            <h3 class="text-warning border-bottom border-secondary pb-2 mb-4">CON NGƯỜI VÀ XÃ HỘI</h3>
            
            <div class="card bg-transparent border-success mb-4">
                <div class="card-body">
                    <h5 class="card-title text-success"><i class="bi bi-quote"></i> Bản chất con người</h5>
                    <p class="card-text fst-italic">"Trong tính hiện thực của nó, bản chất con người là tổng hòa những quan hệ xã hội." (C. Mác)</p>
                    <small class="text-muted">-> Đây là cơ sở cho chỉ số <strong>Social (Hợp tác)</strong> trong game.</small>
                </div>
            </div>

            <h5 class="text-info mt-4">1. Cá nhân và Xã hội</h5>
            <p>Con người vừa là thực thể tự nhiên (sinh học), vừa là thực thể xã hội. Không thể tách rời cá nhân khỏi xã hội. Sự phát triển tự do của mỗi cá nhân là điều kiện cho sự phát triển của tất cả.</p>

            <h5 class="text-info mt-4">2. Vai trò của Quần chúng nhân dân & Lãnh tụ</h5>
            <ul>
                <li><strong>Quần chúng nhân dân:</strong> Là người sáng tạo chân chính ra lịch sử, là lực lượng sản xuất cơ bản.</li>
                <li><strong>Lãnh tụ:</strong> Là người dẫn dắt, định hướng phong trào, nhưng phải từ phong trào quần chúng mà ra.</li>
            </ul>
            <p class="text-warning">-> Logic này quyết định True Ending của game: Lãnh tụ không được tách rời quần chúng.</p>
        `
    }
];