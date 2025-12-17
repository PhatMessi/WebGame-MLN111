// --- FILE: js/data.js ---
// 1. CÂU HỎI KHỞI ĐẦU (PHASE 1)
const initialQuestions = [
    {
        id: 1,
        title: "Tình huống 1: Bản chất con người",
        image: "assets/images/TH1_P1.png",
        content: "Bạn là sinh viên. Một đợt dịch bệnh bùng phát trong khu phố. Lệnh phong tỏa được ban bố, lương thực khan hiếm. Bản năng sinh tồn trỗi dậy, nhưng hàng xóm của bạn (người già yếu) đang thiếu thuốc. Bạn sẽ làm gì?",
        options: [
            { 
                text: "Giữ cho mình. 'Quy luật sinh tồn là trên hết'.", 
                stats: { knowledge: 1, social: -2, impact: 0 },
                explanation: "Bạn đang tuyệt đối hóa phương diện sinh học (bản năng sinh tồn). Tuy nhiên, theo triết học Mác - Lênin: 'Con người là tổng hòa các quan hệ xã hội'. Tách rời cá nhân khỏi xã hội là một sai lầm về mặt phương pháp luận (Trang 466)."
            },
            { 
                text: "Chia sẻ và kêu gọi xóm giềng giúp đỡ nhau.", 
                stats: { knowledge: 0, social: 2, impact: 2 },
                explanation: "Rất tốt. Bạn đã thể hiện đúng bản chất xã hội của con người. Sức mạnh của cộng đồng sẽ giúp từng cá nhân tồn tại tốt hơn. Đây là biểu hiện của tính nhân loại cao cả (Trang 467)."
            },
            { 
                text: "Nghiên cứu phương án phân phối khoa học để đề xuất.", 
                stats: { knowledge: 3, social: 0, impact: 1 },
                explanation: "Bạn sử dụng tư duy lý tính (đặc trưng của con người) để cải biến hoàn cảnh. Con người không chỉ thích nghi thụ động mà còn chủ động cải tạo điều kiện sinh tồn."
            }
        ]
    },
    {
        id: 2,
        title: "Tình huống 2: Quan hệ Cá nhân và Tập thể",
        image: "assets/images/TH2_P1.png",
        content: "Trong một dự án nhóm tại trường/công ty, bạn là người giỏi nhất. Tuy nhiên, các thành viên khác làm việc rất chậm chạp và sai sót, có nguy cơ kéo tụt điểm số/thành tích của bạn xuống. Bạn chọn:",
        options: [
            { 
                text: "Tách ra làm riêng cho nhanh.", 
                stats: { knowledge: 2, social: -2, impact: 0 },
                explanation: "Bạn đang rơi vào chủ nghĩa cá nhân cực đoan. Giáo trình (Trang 469) chỉ rõ: 'Nếu đặt cá nhân lên trên xã hội... thì đều sai lầm và dẫn đến hệ lụy khó lường'."
            },
            { 
                text: "Làm giúp phần của họ để cả nhóm cùng qua môn.", 
                stats: { knowledge: -1, social: 3, impact: 0 },
                explanation: "Bạn đề cao tập thể nhưng lại triệt tiêu tính năng động của các cá nhân khác. Xã hội phát triển cần sự nỗ lực của từng cá thể."
            },
            { 
                text: "Tổ chức lại quy trình, phân công người giỏi kèm người yếu.", 
                stats: { knowledge: 1, social: 0, impact: 3 },
                explanation: "Chính xác. Đây là sự kết hợp hài hòa: 'Sự phát triển tự do của mỗi cá nhân là điều kiện cho sự phát triển của tất cả'. Bạn có tố chất lãnh đạo."
            }
        ]
    },
    {
        id: 3,
        title: "Tình huống 3: Nguồn gốc Lịch sử",
        image: "assets/images/TH3_P1.png",
        content: "Bạn tham gia một cuộc tranh luận về việc tại sao đất nước phát triển được như hôm nay. Bạn bè đưa ra các ý kiến khác nhau, bạn ủng hộ quan điểm nào?",
        options: [
            { 
                text: "Do các vĩ nhân, lãnh đạo kiệt xuất dẫn dắt.", 
                stats: { knowledge: 1, social: -1, impact: 1 },
                explanation: "Đây là quan điểm Duy tâm về lịch sử (Trang 470). Lãnh tụ có vai trò quan trọng, nhưng 'cách mạng là sự nghiệp của quần chúng'. Tuyệt đối hóa lãnh tụ dẫn đến tệ sùng bái cá nhân."
            },
            { 
                text: "Do người lao động sản xuất của cải vật chất hàng ngày.", 
                stats: { knowledge: 1, social: 2, impact: 0 },
                explanation: "Chính xác. 'Quần chúng nhân dân là lực lượng sản xuất cơ bản, là người sáng tạo chân chính ra lịch sử' (Trang 473)."
            },
            { 
                text: "Do sự phát triển tất yếu của khoa học kỹ thuật.", 
                stats: { knowledge: 3, social: 0, impact: 0 },
                explanation: "Khoa học kỹ thuật là động lực quan trọng, nhưng chủ thể nắm giữ và sử dụng nó vẫn là con người (quần chúng nhân dân)."
            }
        ]
    },
    {
        id: 4,
        title: "Tình huống 4: Tính Giai cấp",
        image: "assets/images/TH4_P1.png",
        content: "Khu phố bạn sống có một ông chủ giàu có chèn ép người lao động nghèo (trả lương thấp, bắt làm việc quá sức). Bạn là người có tri thức, bạn sẽ làm gì?",
        options: [
            { 
                text: "Im lặng, đó là quy luật thị trường.", 
                stats: { knowledge: 0, social: -1, impact: -1 },
                explanation: "Bạn đang lờ đi 'tính giai cấp' trong các quan hệ xã hội. Trong xã hội có phân chia giai cấp, thái độ trung lập thực chất là ủng hộ giai cấp thống trị."
            },
            { 
                text: "Viết bài phân tích lên mạng xã hội.", 
                stats: { knowledge: 2, social: 0, impact: 1 },
                explanation: "Bạn sử dụng vũ khí lý luận để đấu tranh tư tưởng. Đây là một hình thức đấu tranh giai cấp quan trọng."
            },
            { 
                text: "Tập hợp người lao động đấu tranh đòi quyền lợi.", 
                stats: { knowledge: 0, social: 2, impact: 3 },
                explanation: "Hành động thực tiễn! Bạn đang tham gia trực tiếp vào phong trào quần chúng để giải quyết mâu thuẫn giai cấp."
            }
        ]
    },
    {
        id: 5,
        title: "Tình huống 5: Xuất hiện Lãnh tụ",
        image: "assets/images/TH5_P1.png",
        content: "Nhóm/Cộng đồng của bạn đang rơi vào bế tắc (lạc đường, dự án thất bại, hoặc bị chèn ép). Mọi người bắt đầu than vãn, hỗn loạn và mất phương hướng. Không ai chịu đứng ra nhận trách nhiệm. Bạn sẽ:",
        options: [
            { 
                text: "Chờ xem có ai tài giỏi đứng ra không.", 
                stats: { knowledge: 0, social: -1, impact: -1 },
                explanation: "Thụ động. Lãnh tụ không tự nhiên sinh ra, mà xuất hiện từ nhu cầu của phong trào quần chúng (Trang 475)."
            },
            { 
                text: "Tự tìm đường thoát thân cho mình trước.", 
                stats: { knowledge: 2, social: -3, impact: 0 },
                explanation: "Ích kỷ. Bạn tách rời lợi ích cá nhân khỏi lợi ích tập thể."
            },
            { 
                text: "Đứng lên trấn an, vạch kế hoạch và phân công nhiệm vụ.", 
                stats: { knowledge: 1, social: 2, impact: 3 },
                explanation: "Tuyệt vời. 'Khi lịch sử đặt ra những nhiệm vụ cần giải quyết... thì từ trong quần chúng sẽ xuất hiện những lãnh tụ' (Trang 475). Bạn chính là nhân tố đó."
            }
        ]
    }
];

// 2. DANH SÁCH 8 NGHỀ NGHIỆP (ĐÃ CẬP NHẬT ĐỦ)
const careers = [
    { id: "leader", name: "Nhà Lãnh đạo", description: "Cần trí tuệ để vạch chiến lược và khả năng tác động mạnh để dẫn dắt phong trào quần chúng.", statsReq: { knowledge: 3, social: 2, impact: 3 } },
    { id: "tech", name: "Công nghệ / Kỹ thuật", description: "Đại diện cho Lực lượng sản xuất tiên tiến. Thiên về tư duy logic và công cụ, đôi khi làm việc độc lập (Social thấp).", statsReq: { knowledge: 3, social: 1, impact: 2 } },
    { id: "worker", name: "Lao động Sản xuất", description: "Sức mạnh nằm ở tính tập thể, đoàn kết giai cấp (Social cao) và trực tiếp tạo ra của cải vật chất (Impact).", statsReq: { knowledge: 1, social: 3, impact: 2 } },
    { id: "educator", name: "Nhà Giáo dục", description: "Cần tri thức uyên thâm và khả năng truyền đạt, kết nối với người học. Tác động gián tiếp qua việc dạy người khác.", statsReq: { knowledge: 3, social: 3, impact: 1 } },
    { id: "healthcare", name: "Nhân viên Y tế", description: "Cần chuyên môn (Trí tuệ) nhưng quan trọng nhất là 'tính nhân loại', lòng trắc ẩn và phục vụ con người.", statsReq: { knowledge: 2, social: 3, impact: 2 } },
    { id: "public_servant", name: "Cán bộ / Công chức", description: "Người điều phối các mối quan hệ xã hội. Cần sự khéo léo và hòa hợp lợi ích (Social cao) hơn là sự đột phá cá nhân.", statsReq: { knowledge: 2, social: 3, impact: 1 } },
    { id: "artist", name: "Nghệ sĩ / Sáng tạo", description: "Thiên về cái 'Tôi' cá nhân, sự độc đáo và tư duy trừu tượng (Trí tuệ/Cảm xúc). Thường làm việc độc lập.", statsReq: { knowledge: 3, social: 1, impact: 2 } },
    { id: "activist", name: "Nhà Hoạt động Xã hội", description: "Không cần phải là thiên tài học thuật, nhưng cần khả năng tập hợp quần chúng cực tốt và hành động quyết liệt để thay đổi thực tại.", statsReq: { knowledge: 1, social: 3, impact: 3 } }
];

// 3. KỊCH BẢN CHUYÊN MÔN (PHASE 2 - ĐỦ 8 NGHỀ)
const careerScenarios = {
    leader: [
        {
            title: "Quyết định sống còn",
            content: "Dự án cải cách của bạn đang gặp khó khăn. Để thành công và đạt mục tiêu vĩ mô (tăng trưởng, phát triển), bạn cần cắt giảm phúc lợi của người dân trong ngắn hạn. Dân chúng đang phản đối kịch liệt. Bạn sẽ:",
            options: [
                { text: "Mục tiêu là trên hết! Dùng quyền lực trấn áp phản đối và ép buộc thi hành.", stats: { knowledge: 2, social: -5, impact: 1 }, message: "Bạn đang rơi vào 'tệ sùng bái cá nhân' và độc đoán. 'Tuyệt đối hóa vai trò lãnh tụ... sẽ kìm hãm tính năng động sáng tạo của quần chúng'." },
                { text: "Hủy bỏ dự án, chiều theo ý muốn trước mắt của mọi người để giữ ghế.", stats: { knowledge: -3, social: 2, impact: -2 }, message: "Bạn đang theo đuôi quần chúng (dân túy). Lãnh tụ phải 'nhận thức đúng đắn quy luật khách quan' và 'định hướng phong trào', chứ không phải bị phong trào lôi đi. " },
                { text: "Tổ chức đối thoại, giải thích rõ lợi ích lâu dài và điều chỉnh kế hoạch để giảm bớt thiệt hại cho dân, dù tiến độ chậm lại.", stats: { knowledge: 2, social: 3, impact: 3 }, message: "Tuyệt vời. Bạn đã tìm thấy sự thống nhất lợi ích giữa lãnh tụ và quần chúng. " }
            ]
        },
        {
            title: "Dùng người",
            content: "Bạn cần bổ nhiệm một trợ lý quan trọng cho vị trí then chốt.",
            options: [
                { text: "Chọn người nhà/người thân cho tin tưởng.", stats: { knowledge: -2, social: -2, impact: 0 }, message: "Tư duy gia đình trị, lợi ích cục bộ, kìm hãm sự phát triển chung." },
                { text: "Tổ chức thi tuyển công khai chọn người tài.", stats: { knowledge: 3, social: 2, impact: 0 }, message: "Công bằng xã hội, tạo động lực phát triển cho tập thể." }
            ]
        },
        {
            title: "Nhận lỗi",
            content: "Bạn đưa ra một quyết định sai lầm gây thiệt hại cho tập thể.",
            options: [
                { text: "Đổ lỗi cho hoàn cảnh hoặc cấp dưới.", stats: { knowledge: 0, social: -4, impact: -2 }, message: "Thiếu bản lĩnh. Lãnh tụ xa rời quần chúng sẽ sớm bị đào thải." },
                { text: "Công khai xin lỗi và chịu trách nhiệm khắc phục.", stats: { knowledge: 0, social: 4, impact: 2 }, message: "Lãnh tụ gắn bó mật thiết với nhân dân, sai thì sửa. Uy tín tăng lên." }
            ]
        }
    ],
    tech: [
        {
            title: "AI và Con người",
            content: "Bạn phát triển thành công một AI có khả năng thay thế hoàn toàn 1.000 công nhân trong nhà máy, giúp lợi nhuận tăng vọt nhưng khiến 1.000 người thất nghiệp.",
            options: [
                { text: "Triển khai ngay! Hiệu quả kinh tế là thước đo duy nhất của sự phát triển.", stats: { knowledge: 4, social: -4, impact: 0 }, message: "Bạn phát triển lực lượng sản xuất nhưng phá vỡ quan hệ xã hội. Sự phát triển này phục vụ lợi ích thiểu số chứ không phải 'tất cả mọi người'. " },
                { text: "Giấu công nghệ này đi, không công bố để bảo vệ việc làm cho công nhân.", stats: { knowledge: -2, social: 1, impact: -2 }, message: "Bạn đang kìm hãm sự phát triển khách quan. Lực lượng sản xuất luôn vận động và phát triển không ngừng. Cản trở nó là phản tiến bộ." },
                { text: "Triển khai công nghệ, nhưng đề xuất dùng lợi nhuận tăng thêm để đào tạo lại 1.000 công nhân đó cho các vị trí sáng tạo hơn.", stats: { knowledge: 3, social: 3, impact: 3 }, message: "Đây chính là 'Sự phát triển tự do của mỗi cá nhân là điều kiện cho sự phát triển của tất cả'. Bạn dùng máy móc để giải phóng con người khỏi lao động chân tay, giúp họ phát triển lên tầm cao mới. " },

            ]
        },
        {
            title: "Mã nguồn Mở hay Độc quyền?",
            content: "Bạn viết ra một thuật toán nén dữ liệu cực tốt. Bạn có thể bán độc quyền nó cho một tập đoàn lớn để giàu to, hoặc công khai mã nguồn (Open Source) để cộng đồng lập trình viên cùng phát triển.",
            options: [
                { text: "Bán độc quyền cho tập đoàn lớn.", stats: { knowledge: 2, social: -2, impact: 0 }, message: "Coi tri thức là tư hữu, kìm hãm sự lan tỏa tri thức xã hội." },
                { text: "Công khai mã nguồn cho cộng đồng.", stats: { knowledge: 1, social: 3, impact: 2 }, message: "Tri thức cá nhân từ xã hội mà ra. Chia sẻ tạo điều kiện cho sự phát triển chung." }
            ]
        },
        {
            title: "Quyền riêng tư dữ liệu",
            content: "Sếp yêu cầu cài 'cửa sau' để thu thập dữ liệu người dùng trái phép nhằm bán quảng cáo.",
            options: [
                { text: "Làm theo lệnh sếp để giữ việc.", stats: { knowledge: 1, social: -3, impact: -1 }, message: "Bạn trở thành công cụ mù quáng, tiếp tay xâm phạm lợi ích quần chúng." },
                { text: "Từ chối và cảnh báo người dùng.", stats: { knowledge: 0, social: 3, impact: 2 }, message: "Bạn đặt lợi ích con người và đạo đức lên trên lợi nhuận." }
            ]
        }
    ],
    worker: [
        {
            title: "Sáng kiến hay Quy trình?",
            content: "Trong quá trình làm việc, bạn phát hiện ra một cách làm mới giúp tăng năng suất gấp đôi nhưng phải thay đổi quy trình cũ kỹ mà quản lý đang áp đặt.",
            options: [
                { text: "Cứ làm theo chỉ đạo cho xong chuyện, lãnh lương rồi về.", stats: { knowledge: 1, social: 0, impact: -2 }, message: "Bạn đang tự hạ thấp vai trò của mình. Quần chúng nhân dân không chỉ là lực lượng cơ bắp mà còn là 'nguồn mạch cảm hứng vô tận, là nguồn sáng tạo'." },
                { text: "Âm thầm làm theo cách mới để mình nhàn hơn.", stats: { knowledge: 1, social: -1, impact: 0 }, message: "Lợi ích cá nhân đạt được nhưng không chia sẻ cho tập thể. Đây chưa phải là sự phát triển tự do của 'tất cả mọi người'." },
                { text: "Mạnh dạn đề xuất cải tiến với tập thể, chấp nhận rủi ro bị bác bỏ để thay đổi quy trình chung.", stats: { knowledge: 2, social: 2, impact: 3 }, message: "Tuyệt vời. Từ hoạt động thực tiễn sản xuất, bạn đã tạo ra thay đổi. Đây là minh chứng cho việc 'Quần chúng nhân dân là động lực phát triển của lịch sử'." }
            ]
        },
        {
            title: "Tình đồng nghiệp",
            content: "Một đồng nghiệp lớn tuổi làm việc chậm và sắp bị sa thải. Bạn có kỹ năng làm nhanh hơn.",
            options: [
                { text: "Mặc kệ, ai làm nấy hưởng.", stats: { knowledge: 1, social: -2, impact: 0 }, message: "Chủ nghĩa cá nhân cực đoan, thiếu tính giai cấp." },
                { text: "Dành giờ nghỉ trưa hướng dẫn bác ấy.", stats: { knowledge: 0, social: 3, impact: 1 }, message: "Tinh thần tương trợ giai cấp. Sự phát triển của bạn kéo theo người khác." }
            ]
        },
        {
            title: "Đình công hay Im lặng?",
            content: "Nhà máy cắt giảm bảo hộ lao động gây nguy hiểm. Mọi người muốn đình công nhưng sợ.",
            options: [
                { text: "Khuyên mọi người cam chịu.", stats: { knowledge: 0, social: -1, impact: -2 }, message: "Thiếu tính đấu tranh, chấp nhận bất công." },
                { text: "Đứng ra tổ chức, đại diện đàm phán.", stats: { knowledge: 1, social: 2, impact: 3 }, message: "Quần chúng cần người tổ chức để chuyển từ tự phát sang tự giác." }
            ]
        }
    ],
    public_servant: [
        {
            title: "Quy hoạch và Lòng dân",
            content: "Cấp trên yêu cầu bạn giải tỏa một khu chợ truyền thống để xây trung tâm thương mại (phát triển kinh tế). Bà con tiểu thương phản đối dữ dội vì mất kế sinh nhai. Bạn đứng giữa hai làn đạn.",
            options: [
                { text: "Cưỡng chế giải tỏa theo lệnh. Phải hy sinh lợi ích nhỏ để phát triển cái lớn.", stats: { knowledge: 0, social: -5, impact: 2 }, message: "Bạn đang áp đặt duy ý chí. 'Mọi phong trào đều thất bại nếu chưa tìm được lãnh tụ xứng đáng' - và người xứng đáng không phải là người đi ngược lại lợi ích quần chúng." },
                { text: "Báo cáo sai sự thật lên cấp trên để trì hoãn dự án, giữ yên ổn cho dân.", stats: { knowledge: -2, social: 2, impact: -1 }, message: "Bạn mỵ dân và lừa dối tổ chức. Bạn không giải quyết mâu thuẫn mà chỉ lảng tránh nó. Đây không phải là cách quản lý khoa học." },
                { text: "Tổ chức đối thoại 3 bên (Dân - Chính quyền - Doanh nghiệp). Đề xuất phương án xây trung tâm thương mại nhưng dành tầng 1 cho tiểu thương thuê giá rẻ.", stats: { knowledge: 3, social: 3, impact: 3 }, message: "Bạn đã giải quyết mâu thuẫn biện chứng! Bạn tìm ra điểm 'thống nhất về lợi ích và hành động' giữa các bên. Xã hội phát triển, cá nhân được đảm bảo." }
            ]
        },
        {
            title: "Thụ lý hồ sơ",
            content: "Dân nghèo nộp hồ sơ xin trợ cấp nhưng thiếu giấy tờ phụ. Luật cho phép trả về.",
            options: [
                { text: "Trả hồ sơ, làm đúng quy trình.", stats: { knowledge: 1, social: -2, impact: 0 }, message: "Quan liêu, máy móc. Xa rời mục đích phục vụ dân." },
                { text: "Hướng dẫn bổ sung sau, giải quyết trước.", stats: { knowledge: 0, social: 3, impact: 1 }, message: "Lợi ích của quần chúng thống nhất với người quản lý." }
            ]
        },
        {
            title: "Bệnh thành tích",
            content: "Cấp trên muốn bạn báo cáo số liệu 'đẹp' hơn thực tế để đạt thi đua.",
            options: [
                { text: "Làm đẹp số liệu.", stats: { knowledge: -1, social: 0, impact: -2 }, message: "Dối trá, tách rời thực tiễn khách quan sẽ dẫn đến sai lầm lâu dài." },
                { text: "Báo cáo trung thực khó khăn.", stats: { knowledge: 2, social: 0, impact: 2 }, message: "Nhìn thẳng vào sự thật khách quan là điều kiện tiên quyết để phát triển." }
            ]
        }
    ],
    healthcare: [
        {
            title: "Sự ưu tiên tàn khốc",
            content: "Trong một đại dịch, bệnh viện quá tải. Bạn chỉ còn 01 máy thở duy nhất. Hai bệnh nhân đang nguy kịch: Một là vị chủ tịch tập đoàn giàu có (người đã tài trợ thiết bị cho bệnh viện), hai là một công nhân lao động nghèo (trụ cột của gia đình 5 người). Giám đốc bệnh viện gây áp lực phải cứu người giàu.",
            options: [
                { text: "Cứu vị chủ tịch. Đây là quy luật kinh tế, họ có tiền và quyền lực chi phối.", stats: { knowledge: 2, social: -4, impact: 1 }, message: "Bạn để 'tính giai cấp' lấn át 'tính nhân loại'. Bạn phục vụ lợi ích của giai cấp thống trị thay vì giá trị con người phổ quát." },
                { text: "Cứu người công nhân. Vì họ là đại diện cho quần chúng lao động - lực lượng sản xuất chính.", stats: { knowledge: -1, social: 3, impact: 1 }, message: "Bạn đứng về phía quần chúng. Tuy nhiên, nếu chỉ dựa vào cảm tính giai cấp mà thiếu biện pháp giải quyết vấn đề thiếu hụt vật tư (cái chung) thì cũng chưa trọn vẹn." },
                { text: "Kiên quyết từ chối áp lực, đánh giá dựa trên chỉ số sinh tồn y học (ai có cơ hội sống cao hơn thì cứu), đồng thời công khai sự thiếu thốn vật tư để kêu gọi xã hội hỗ trợ.", stats: { knowledge: 3, social: 2, impact: 3 }, message: "Đây là sự thống nhất giữa Khoa học (Khách quan) và Đạo đức (Nhân văn). Bạn tôn trọng 'tính nhân loại' là nền tảng cuộc sống, đồng thời dùng ảnh hưởng để tác động lại xã hội." }
            ]
        },
        {
            title: "Thuốc đắt hay rẻ?",
            content: "Trình dược viên đề nghị hoa hồng lớn nếu kê thuốc đắt tiền (tác dụng như thuốc rẻ).",
            options: [
                { text: "Kê thuốc đắt, mình cũng cần sống.", stats: { knowledge: 1, social: -4, impact: 0 }, message: "Lợi ích cá nhân chà đạp lên lợi ích quần chúng. Tha hóa đạo đức." },
                { text: "Kê thuốc rẻ và hiệu quả.", stats: { knowledge: 0, social: 3, impact: 1 }, message: "Phục vụ nhân dân là mục đích tối thượng." }
            ]
        },
        {
            title: "Đi tuyến dưới",
            content: "Bệnh viện kêu gọi tình nguyện về vùng sâu vùng xa 2 năm.",
            options: [
                { text: "Từ chối, ở phố mới có danh tiếng.", stats: { knowledge: 2, social: -1, impact: 0 }, message: "Quan điểm danh vọng cá nhân, xa rời thực tiễn." },
                { text: "Đăng ký đi.", stats: { knowledge: 1, social: 3, impact: 3 }, message: "Hòa mình vào thực tiễn đời sống quần chúng để rèn luyện nhân cách." }
            ]
        }
    ],
    educator: [
        {
            title: "Chương trình giảng dạy",
            content: "Nhà trường yêu cầu bạn dạy học sinh theo hướng 'ngoan ngoãn, vâng lời' để dễ quản lý và ổn định xã hội. Nhưng bạn biết rằng tư duy phản biện mới giúp xã hội phát triển.",
            options: [
                { text: "Dạy theo giáo trình 100%. Ổn định là trên hết.", stats: { knowledge: -1, social: 1, impact: -2 }, message: "Bạn tạo ra những 'cỗ máy' biết nói. Bạn đang kìm hãm 'cái riêng, cái đơn nhất, độc đáo' của mỗi học sinh." },
                { text: "Bí mật dạy học sinh tư duy tự do, bất chấp quy định.", stats: { knowledge: 3, social: -2, impact: 0 }, message: "Bạn đang tạo ra mâu thuẫn đối kháng. Cá nhân tốt nhưng tách rời môi trường xã hội thì cũng khó tồn tại." },
                { text: "Khéo léo lồng ghép tư duy phản biện vào bài giảng, đồng thời thuyết phục ban giám hiệu đổi mới phương pháp.", stats: { knowledge: 2, social: 2, impact: 2 }, message: "Bạn đang tác động biện chứng. Bạn thay đổi ý thức xã hội dần dần thông qua giáo dục, tạo điều kiện cho sự phát triển tự do của thế hệ sau." }
            ]
        },
        {
            title: "Học trò cá biệt",
            content: "Một học sinh thông minh nhưng hay cãi lại, bị coi là cá biệt. Nhà trường muốn đuổi.",
            options: [
                { text: "Đồng ý đuổi cho lớp yên ổn.", stats: { knowledge: -1, social: -2, impact: 0 }, message: "Giáo dục rập khuôn giết chết sự sáng tạo và khác biệt." },
                { text: "Kiên nhẫn đối thoại, định hướng tư duy.", stats: { knowledge: 2, social: 2, impact: 0 }, message: "Tôn trọng cái Riêng trong cái Chung." }
            ]
        },
        {
            title: "Chảy máu chất xám",
            content: "Bạn được mời sang nước ngoài làm việc lương cao gấp 10 lần.",
            options: [
                { text: "Đi ngay, ở đây không phát triển được.", stats: { knowledge: 3, social: 0, impact: -1 }, message: "Ưu tiên phát triển cá nhân, tách rời hoàn cảnh quê hương." },
                { text: "Đi nhưng cam kết đem công nghệ về nước.", stats: { knowledge: 0, social: 2, impact: 3 }, message: "Cá nhân gắn bó và đóng góp cho cộng đồng dân tộc." }
            ]
        }
    ],
    artist: [
        {
            title: "Hiện thực hay Hư ảo?",
            content: "Bạn nhận được lời mời tài trợ khủng để làm một tác phẩm nghệ thuật tôn vinh lối sống xa hoa, thoát ly thực tại. Trong khi đó, ngoài kia xã hội đang đầy rẫy những bất công cần tiếng nói phản biện.",
            options: [
                { text: "Nhận lời làm nghệ thuật giải trí thuần túy. Nghệ thuật là tự do cá nhân, không cần dính dáng chính trị.", stats: { knowledge: 2, social: -3, impact: 0 }, message: "Bạn rơi vào 'Tháp ngà nghệ thuật'. Bạn quên rằng 'Văn hóa, tinh thần... đều do quần chúng nhân dân sáng tạo ra' và bạn chỉ là người chắt lọc. Tách rời nguồn mạch này, nghệ thuật sẽ khô héo." },
                { text: "Từ chối tài trợ, làm một tác phẩm cực đoan chửi bới xã hội để thỏa mãn cái tôi nổi loạn.", stats: { knowledge: 1, social: -2, impact: -1 }, message: "Bạn đề cao quá mức cái 'Tôi' (Cá nhân) đối lập với xã hội. Đây là sự phản kháng tiêu cực, thiếu tính xây dựng." },
                { text: "Dùng tài năng của mình để sáng tác về cuộc sống thực của người dân, phản ánh nguyện vọng của họ, biến nỗi đau của quần chúng thành tác phẩm lay động nhân tâm.", stats: { knowledge: 2, social: 4, impact: 3 }, message: "Tuyệt vời. Bạn đã để quần chúng là 'người gạn lọc, lưu giữ và truyền bá' giá trị của bạn. Bạn hòa cái Riêng của mình vào cái Chung của thời đại." }
            ]
        },
        {
            title: "Bảo tồn hay Phá bỏ?",
            content: "Bạn được giao cải tạo khu di tích cũ kỹ.",
            options: [
                { text: "Đập bỏ xây mới hiện đại.", stats: { knowledge: 2, social: -3, impact: 0 }, message: "Phủ nhận quá khứ, tách rời truyền thống dân tộc." },
                { text: "Phục dựng trên nền tảng cũ, kết hợp cái mới.", stats: { knowledge: 2, social: 2, impact: 0 }, message: "Kế thừa biện chứng. Quần chúng là người lưu giữ giá trị văn hóa." }
            ]
        },
        {
            title: "Tác phẩm kén khán giả",
            content: "Bạn sáng tác bài hát sâu sắc nhưng khó nghe, ít người hiểu.",
            options: [
                { text: "Chê khán giả trình độ thấp, chỉ hát cho giới thượng lưu.", stats: { knowledge: 1, social: -3, impact: 0 }, message: "Tự cô lập mình khỏi đại chúng." },
                { text: "Tìm cách biểu diễn bình dân hơn để lan tỏa.", stats: { knowledge: 0, social: 3, impact: 2 }, message: "Văn hóa phải đi vào đời sống quần chúng mới có sức sống." }
            ]
        }
    ],
    activist: [
        {
            title: "Phương pháp đấu tranh",
            content: "Bạn phát hiện một nhà máy đang xả thải gây ung thư cho cả làng. Chính quyền địa phương đang làm ngơ. Bạn cần hành động để thay đổi thực trạng này.",
            options: [
                { text: "Một mình đột nhập phá hoại đường ống xả thải để gây chú ý.", stats: { knowledge: -1, social: -3, impact: 1 }, message: "Chủ nghĩa anh hùng cá nhân manh động. Bạn tách mình khỏi quần chúng và vi phạm pháp luật, dễ dẫn đến bị cô lập hoặc bắt giữ." },
                { text: "Chỉ trích người dân là ngu dốt, nhu nhược vì không chịu đứng lên, rồi bỏ đi nơi khác sống.", stats: { knowledge: 1, social: -5, impact: 0 }, message: "Thái độ khinh miệt quần chúng. Bạn quên rằng 'Quần chúng nhân dân luôn là người thầy vĩ đại của các cá nhân'." },
                { text: "Kiên trì thu thập bằng chứng khoa học, đi từng nhà vận động người dân hiểu rõ tác hại, và đại diện họ gửi đơn kiến nghị pháp lý.", stats: { knowledge: 3, social: 4, impact: 4 }, message: "Bạn đóng vai trò là 'nhân tố thúc đẩy'. Bạn giúp quần chúng chuyển từ 'tự phát' sang 'tự giác'. Lãnh tụ và quần chúng hòa làm một dòng chảy cách mạng." }
            ]
        },
        {
            title: "Nguồn quỹ đen",
            content: "Công ty gây ô nhiễm muốn tài trợ cho tổ chức của bạn để 'tẩy trắng'.",
            options: [
                { text: "Nhận tiền để duy trì tổ chức.", stats: { knowledge: -1, social: -4, impact: 0 }, message: "Thỏa hiệp nguyên tắc, đánh mất mục đích vì lợi ích trước mắt." },
                { text: "Từ chối và công khai hành vi mua chuộc.", stats: { knowledge: 0, social: 2, impact: 3 }, message: "Giữ vững lập trường cách mạng." }
            ]
        },
        {
            title: "Từ thiện",
            content: "Bạn đi làm từ thiện. Cách làm nào đúng đắn?",
            options: [
                { text: "Phát tiền quà, chụp ảnh rồi về.", stats: { knowledge: 0, social: 1, impact: 0 }, message: "Hình thức, không giải quyết gốc rễ vấn đề." },
                { text: "Hướng dẫn cách làm ăn mới để thoát nghèo bền vững.", stats: { knowledge: 2, social: 0, impact: 4 }, message: "Giúp quần chúng phát huy nội lực tự thân." }
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
        image: "assets/images/TE_LS.png",
        subtitle: "True Ending: SỰ THỐNG NHẤT BIỆN CHỨNG",
        content: "Chúc mừng! Bạn đã đạt đến cảnh giới cao nhất của nhận thức. Bạn không chỉ phát triển năng lực cá nhân rực rỡ (Cái Riêng) mà còn hòa mình vào dòng chảy của thời đại (Cái Chung). Bạn hiểu rằng lãnh tụ và quần chúng phải thống nhất về ý chí và hành động. Sự thành công của bạn hôm nay là minh chứng hùng hồn cho luận điểm: 'Sự phát triển tự do của mỗi cá nhân là điều kiện cho sự phát triển tự do của tất cả mọi người'.",
        color: "success",
        icon: "🏆"
    },
    bad_ending_isolation: {
        title: "THIÊN TÀI CÔ ĐỘC",
        image: "assets/images/BE_TTCD.png",
        subtitle: "Bad Ending 1: SỰ THA HÓA CÁ NHÂN",
        content: "Bạn rất xuất sắc, nhưng bạn đã thất bại về mặt triết học. Bạn đã rơi vào khuynh hướng 'Tuyệt đối hóa vai trò cá nhân', đặt cá nhân lên trên xã hội. Bạn quên rằng bản chất con người là 'tổng hòa các mối quan hệ xã hội'. Trí tuệ của bạn không phục vụ quần chúng, và vì thế, nó sẽ sớm bị lịch sử đào thải. Sự tự do của bạn là ích kỷ và cô lập.",
        color: "warning",
        icon: '<i class="bi bi-cloud-drizzle-fill"></i>'
    },
    bad_ending_passive: {
        title: "NGƯỜI THỪA HÀNH THỤ ĐỘNG",
        image: "assets/images/BE_CMCH.png",
        subtitle: "Bad Ending 2: CỖ MÁY VÔ HỒN",
        content: "Bạn là một người tốt, hòa đồng, nhưng thiếu bản lĩnh. Bạn đã hòa tan cái 'Tôi' của mình vào tập thể đến mức đánh mất bản sắc. Tuy quần chúng là người sáng tạo lịch sử, nhưng lịch sử cũng cần những cá nhân kiệt xuất để 'nhận thức quy luật và vạch ra định hướng'. Sự phát triển của xã hội cần những cú hích từ những cá nhân dám nghĩ dám làm, điều mà bạn đã từ chối thực hiện.",
        color: "secondary",
        icon: '<i class="bi bi-robot"></i>'
    },
    bad_ending_tyrant: {
        title: "KẺ ĐỘC ĐOÁN",
        image: "assets/images/BE_KDTDC.png",
        subtitle: "Bad Ending 3: KẺ ĐỘC TÀI DUY Ý CHÍ",
        content: "Bạn có quyền lực và tầm ảnh hưởng, nhưng bạn đã đi ngược lại lợi ích của nhân dân. Sai lầm của bạn là 'Thần thánh hóa vai trò lãnh tụ', coi nhẹ quần chúng. Bạn áp đặt ý chí chủ quan lên thực tiễn khách quan. Hãy nhớ: 'Cách mạng là sự nghiệp của quần chúng'. Không có sự ủng hộ của họ, mọi quyền lực của bạn chỉ là lâu đài xây trên cát.",
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
            <p>Câu nói phản ánh mối quan hệ biện chứng, thống nhất giữa <strong>Cá nhân</strong> và <strong>Xã hội</strong>:</p>
            <ul>
                <li><strong>"Sự phát triển tự do của mỗi cá nhân":</strong> Là việc mỗi con người cụ thể được giải phóng khỏi áp bức, bóc lột, nghèo nàn; được tạo điều kiện để phát triển toàn diện về năng lực, trí tuệ và phẩm chất.</li>
                <li><strong>"Điều kiện cho sự phát triển tự do của tất cả":</strong> Xã hội là tập hợp của các cá nhân. Một xã hội không thể tự do nếu mỗi thành viên trong đó còn bị kìm hãm. Sự phát triển lành mạnh của từng tế bào (cá nhân) là tiền đề để cơ thể (xã hội) khỏe mạnh.</li>
            </ul>
            <div class="content-section-title">Ý nghĩa Triết học</div>
            <ul>
                <li><strong>Bác bỏ quan điểm sai lầm:</strong> Phủ nhận quan điểm cho rằng Chủ nghĩa xã hội coi nhẹ cá nhân, hoặc "san bằng" cá tính. Ngược lại, CNXH tôn trọng và phát huy cá tính sáng tạo.</li>
                <li><strong>Khẳng định bản chất xã hội:</strong> Tự do của cá nhân không phải là tách rời cộng đồng (chủ nghĩa cá nhân cực đoan), mà là tự do trong sự kết nối, cống hiến và thụ hưởng cùng cộng đồng.</li>
            </ul>
                        <div class="text-center my-3">
                <img src="assets/images/YNG1.jpg" class="lesson-img" alt="Lãnh tụ Lênin">
                <p class="small text-white-50 fst-italic mt-1"></p>
            </div>
            <div class="content-section-title">Ý nghĩa thực tiễn hiện nay</div>
            <div class="p-3 bg-dark border border-secondary rounded mt-2">
                <strong>Vận dụng tại Việt Nam:</strong>
                <ul class="mb-0 mt-2">
                    <li><strong>Về chính sách:</strong> Nhà nước tạo cơ chế để "Dân giàu" (cá nhân phát triển) thì "Nước mới mạnh" (xã hội phát triển).</li>
                    <li><strong>Về giáo dục:</strong> Chuyển từ truyền thụ kiến thức một chiều sang phát triển năng lực, phẩm chất người học (như mô hình Đại học FPT khuyến khích tư duy tự chủ).</li>
                    <li><strong>Về ứng xử:</strong> Mỗi sinh viên cần nỗ lực học tập (phát triển cá nhân) để sau này đóng góp giá trị cho đất nước (phát triển xã hội), tránh lối sống vị kỷ hoặc ỷ lại vào tập thể.</li>
                </ul>
            </div>

        `
    }
];