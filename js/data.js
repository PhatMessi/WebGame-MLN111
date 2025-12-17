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
            content: "Bạn cần bổ nhiệm một trợ lý quan trọng cho vị trí then chốt, người sẽ ảnh hưởng trực tiếp đến hiệu quả công việc và uy tín của tập thể trong thời gian dài.",
            options: [
                {
                    text: "Chọn người nhà hoặc người thân vì tin tưởng.",
                    stats: { knowledge: -2, social: -2, impact: 0 },
                    message: "Tư duy gia đình trị và lợi ích cục bộ làm suy yếu nguyên tắc công bằng, dẫn đến sử dụng sai nguồn lực và kìm hãm sự phát triển chung của tổ chức."
                },
                {
                    text: "Tổ chức thi tuyển công khai để chọn người có năng lực.",
                    stats: { knowledge: 3, social: 2, impact: 0 },
                    message: "Việc lựa chọn dựa trên năng lực và cống hiến thể hiện công bằng xã hội, phát huy vai trò con người – yếu tố quyết định của sự phát triển."
                }
            ]
        },
        {
            title: "Nhận lỗi",
            content: "Một quyết định do bạn đưa ra gây thiệt hại cho tập thể, ảnh hưởng đến quyền lợi chung và niềm tin của những người xung quanh.",
            options: [
                {
                    text: "Đổ lỗi cho hoàn cảnh khách quan hoặc cấp dưới.",
                    stats: { knowledge: 0, social: -4, impact: -2 },
                    message: "Trốn tránh trách nhiệm thể hiện sự thiếu bản lĩnh. Khi người lãnh đạo xa rời quần chúng và né tránh sai lầm, uy tín và vai trò lãnh đạo sẽ dần bị suy giảm."
                },
                {
                    text: "Công khai nhận lỗi và chịu trách nhiệm khắc phục.",
                    stats: { knowledge: 0, social: 4, impact: 2 },
                    message: "Dám nhận sai và sửa sai thể hiện bản lĩnh chính trị, gắn bó với tập thể. Uy tín không mất đi mà được củng cố thông qua hành động thực tiễn."
                }
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
            title: "Mã nguồn mở hay độc quyền?",
            content: "Bạn phát triển được một thuật toán nén dữ liệu vượt trội. Một tập đoàn lớn đề nghị mua độc quyền với giá rất cao, đổi lại thuật toán sẽ không được công bố. Ngược lại, bạn có thể công khai mã nguồn (Open Source) để cộng đồng lập trình viên cùng sử dụng và phát triển.",
            options: [
                {
                    text: "Bán độc quyền cho tập đoàn lớn.",
                    stats: { knowledge: 2, social: -2, impact: 0 },
                    message: "Khi tri thức bị biến thành tư hữu độc quyền, khả năng lan tỏa và phát triển chung của xã hội bị hạn chế, dù cá nhân có thể hưởng lợi trước mắt."
                },
                {
                    text: "Công khai mã nguồn cho cộng đồng.",
                    stats: { knowledge: 1, social: 3, impact: 2 },
                    message: "Tri thức hình thành từ thực tiễn xã hội. Việc chia sẻ và hợp tác giúp tri thức tiếp tục phát triển, phục vụ lợi ích chung và thúc đẩy tiến bộ lâu dài."
                }
            ]
        },
        {
            title: "Quyền riêng tư dữ liệu",
            content: "Sếp yêu cầu bạn cài đặt một 'cửa sau' trong hệ thống để thu thập dữ liệu người dùng trái phép, nhằm khai thác cho mục đích quảng cáo và lợi nhuận.",
            options: [
                {
                    text: "Làm theo chỉ đạo để giữ vị trí công việc.",
                    stats: { knowledge: 1, social: -3, impact: -1 },
                    message: "Khi người lao động trí óc hành động như một công cụ mù quáng, tri thức bị tha hóa và trở thành phương tiện xâm phạm quyền lợi chính đáng của quần chúng."
                },
                {
                    text: "Từ chối và cảnh báo người dùng.",
                    stats: { knowledge: 0, social: 3, impact: 2 },
                    message: "Đặt con người và quyền lợi xã hội lên trên lợi nhuận thể hiện trách nhiệm của người làm công nghệ đối với cộng đồng và sự phát triển bền vững."
                }
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
            content: "Một đồng nghiệp lớn tuổi làm việc chậm do khó thích nghi với công nghệ mới và đang đứng trước nguy cơ bị sa thải. Bạn có kỹ năng tốt hơn và hoàn thành công việc nhanh hơn.",
            options: [
                {
                    text: "Mặc kệ, ai làm tốt thì người đó hưởng.",
                    stats: { knowledge: 1, social: -2, impact: 0 },
                    message: "Đề cao lợi ích cá nhân một cách tuyệt đối làm suy yếu tinh thần đoàn kết. Khi con người bị tách rời khỏi tập thể, sức mạnh chung của giai cấp lao động bị phân tán."
                },
                {
                    text: "Dành thời gian hướng dẫn và hỗ trợ trong giờ nghỉ.",
                    stats: { knowledge: 0, social: 3, impact: 1 },
                    message: "Tinh thần tương trợ và đoàn kết giúp nâng cao năng lực chung. Sự phát triển của cá nhân gắn liền với sự phát triển của tập thể."
                }
            ]
        },
        {
            title: "Đình công hay im lặng?",
            content: "Nhà máy cắt giảm trang bị bảo hộ lao động, làm tăng nguy cơ tai nạn. Nhiều công nhân bức xúc nhưng lo sợ mất việc nên do dự trước ý định đình công.",
            options: [
                {
                    text: "Khuyên mọi người im lặng để giữ việc.",
                    stats: { knowledge: 0, social: -1, impact: -2 },
                    message: "Cam chịu trước bất công khiến điều kiện lao động ngày càng xấu đi. Thiếu đấu tranh đồng nghĩa với việc chấp nhận thiệt thòi kéo dài."
                },
                {
                    text: "Đứng ra tổ chức và đại diện tập thể đàm phán.",
                    stats: { knowledge: 1, social: 2, impact: 3 },
                    message: "Khi quần chúng được tổ chức và dẫn dắt, hành động đấu tranh chuyển từ tự phát sang tự giác, tạo ra sức mạnh thay đổi thực tiễn."
                }
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
            content: "Một người dân nghèo nộp hồ sơ xin trợ cấp xã hội nhưng thiếu một số giấy tờ phụ do hoàn cảnh khó khăn, đi lại không thuận tiện. Theo quy định pháp luật hiện hành, cán bộ được phép trả hồ sơ để yêu cầu bổ sung đầy đủ",
            options: [
                { text: "Trả lại hồ sơ, thực hiện đúng quy trình và quy định pháp luật.", stats: { knowledge: 1, social: -2, impact: 0 }, message: "Quan liêu, máy móc. Xa rời mục đích phục vụ dân." },
                { text: "Hướng dẫn người dân bổ sung sau, ưu tiên giải quyết để họ sớm nhận được trợ cấp.", stats: { knowledge: 0, social: 3, impact: 1 }, message: "Lợi ích của quần chúng thống nhất với người quản lý." }
            ]
        },
        {
            title: "Bệnh thành tích",
            content: "Trong quá trình tổng hợp báo cáo, cấp trên gợi ý bạn điều chỉnh số liệu theo hướng 'đẹp' hơn thực tế để đơn vị đạt chỉ tiêu thi đua, tránh bị đánh giá thấp và ảnh hưởng đến thành tích chung.",
            options: [
                { text: "Điều chỉnh số liệu theo yêu cầu.", stats: { knowledge: -1, social: 0, impact: -2 }, message: "Việc bóp méo sự thật khách quan có thể mang lại lợi ích ngắn hạn, nhưng về lâu dài sẽ dẫn đến nhận thức sai lệch, quyết sách thiếu chính xác và làm trầm trọng thêm bệnh thành tích." },
                { text: "Báo cáo trung thực những khó khăn thực tế.", stats: { knowledge: 2, social: 0, impact: 2 }, message: "Tôn trọng sự thật khách quan là nguyên tắc cơ bản của nhận thức khoa học, giúp cấp trên thấy rõ vấn đề để điều chỉnh chính sách và thúc đẩy sự phát triển bền vững." }
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
            content: "Bạn là bác sĩ trong một bệnh viện công. Trình dược viên đề nghị hoa hồng lớn nếu bạn kê thuốc giá cao cho bệnh nhân. Trên thực tế, thuốc này không vượt trội rõ rệt so với thuốc rẻ hơn, nhưng mang lại lợi ích kinh tế cho bạn và bệnh viện.",
            options: [
                { text: "Kê thuốc giá cao để tăng thu nhập và giúp bệnh viện có thêm nguồn tài chính.", stats: { knowledge: 1, social: -4, impact: 0 }, message: "Lợi ích cá nhân chà đạp lên lợi ích quần chúng. Tha hóa đạo đức." },
                { text: "Ưu tiên kê thuốc phù hợp và hiệu quả, giảm gánh nặng chi phí cho người bệnh.", stats: { knowledge: 0, social: 3, impact: 1 }, message: "Phục vụ nhân dân là mục đích tối thượng." }
            ]
        },
        {
            title: "Đi tuyến dưới",
            content: "Bệnh viện kêu gọi bác sĩ, nhân viên y tế tình nguyện về vùng sâu, vùng xa trong 2 năm để hỗ trợ chăm sóc sức khỏe cho người dân thiếu điều kiện y tế. Tuy nhiên, làm việc ở thành phố giúp bạn có nhiều cơ hội thăng tiến, danh tiếng và thu nhập ổn định hơn.",
            options: [
                { text: "Từ chối, ở lại thành phố để phát triển sự nghiệp cá nhân.", stats: { knowledge: 2, social: -1, impact: 0 }, message: "Quan điểm danh vọng cá nhân, xa rời thực tiễn." },
                { text: "Đăng ký đi tuyến dưới để góp phần cải thiện y tế cho cộng đồng khó khăn.", stats: { knowledge: 1, social: 3, impact: 3 }, message: "Hòa mình vào thực tiễn đời sống quần chúng để rèn luyện nhân cách." }
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
            content: "Một học sinh thông minh, thường xuyên đặt câu hỏi phản biện và tranh luận với giáo viên, khiến lớp học mất trật tự theo quan điểm nhà trường. Dù có năng lực, em bị coi là “cá biệt” và đề xuất cho thôi học để giữ kỷ luật chung.",
            options: [
                { text: "Đồng ý cho thôi học để đảm bảo trật tự và tính thống nhất trong giáo dục.", stats: { knowledge: -1, social: -2, impact: 0 }, message: "Giáo dục rập khuôn giết chết sự sáng tạo và khác biệt." },
                { text: "Kiên nhẫn đối thoại, định hướng tư duy phản biện theo hướng tích cực.", stats: { knowledge: 2, social: 2, impact: 0 }, message: "Tôn trọng cái Riêng trong cái Chung." }
            ]
        },
        {
            title: "Chảy máu chất xám",
            content: "Bạn là giảng viên trẻ có năng lực, được mời sang nước ngoài làm việc với mức lương cao gấp nhiều lần. Trong khi đó, trong nước đang thiếu đội ngũ trí thức chất lượng cao để đào tạo thế hệ sau.",
            options: [
                { text: "Chấp nhận ra nước ngoài vì cơ hội phát triển cá nhân tốt hơn.", stats: { knowledge: 3, social: 0, impact: -1 }, message: "Ưu tiên phát triển cá nhân, tách rời hoàn cảnh quê hương." },
                { text: "Ra nước ngoài học hỏi nhưng hướng tới quay về hoặc chuyển giao tri thức cho trong nước.", stats: { knowledge: 0, social: 2, impact: 3 }, message: "Cá nhân gắn bó và đóng góp cho cộng đồng dân tộc." }
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
            title: "Bảo tồn hay phá bỏ?",
            content: "Bạn được giao nhiệm vụ cải tạo một khu di tích cũ đã xuống cấp. Một phương án là phá bỏ hoàn toàn để xây dựng công trình mới hiện đại, phương án khác là phục dựng dựa trên nền tảng cũ và bổ sung các yếu tố mới phù hợp với đời sống hiện đại.",
            options: [
                {
                    text: "Đập bỏ để xây mới hoàn toàn.",
                    stats: { knowledge: 2, social: -3, impact: 0 },
                    message: "Việc phủ nhận sạch trơn quá khứ làm đứt gãy mạch phát triển văn hóa, khiến công trình mới tách rời truyền thống và ký ức chung của cộng đồng."
                },
                {
                    text: "Phục dựng trên nền tảng cũ, kết hợp yếu tố hiện đại.",
                    stats: { knowledge: 2, social: 2, impact: 0 },
                    message: "Kế thừa một cách biện chứng giúp bảo tồn giá trị lịch sử, đồng thời tạo điều kiện để văn hóa tiếp tục phát triển gắn với đời sống của quần chúng."
                }
            ]
        },
        {
            title: "Tác phẩm kén khán giả",
            content: "Bạn sáng tác một tác phẩm âm nhạc có chiều sâu tư tưởng nhưng hình thức thể hiện khó tiếp cận, khiến phần lớn khán giả cảm thấy xa lạ và khó cảm thụ.",
            options: [
                {
                    text: "Chỉ sáng tác cho số ít người hiểu, bỏ qua số đông.",
                    stats: { knowledge: 1, social: -3, impact: 0 },
                    message: "Khi nghệ thuật tự tách mình khỏi đời sống quần chúng, nó dần mất đi chức năng xã hội và sức ảnh hưởng rộng rãi."
                },
                {
                    text: "Điều chỉnh cách thể hiện để dễ tiếp cận hơn.",
                    stats: { knowledge: 0, social: 3, impact: 2 },
                    message: "Văn hóa và nghệ thuật chỉ thực sự có sức sống khi gắn bó với quần chúng, phản ánh và phục vụ nhu cầu tinh thần của xã hội."
                }
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
            content: "Một doanh nghiệp từng gây ô nhiễm môi trường đề nghị tài trợ một khoản tiền lớn cho tổ chức của bạn, với mục đích cải thiện hình ảnh và che giấu các hành vi sai trái trước dư luận.",
            options: [
                {
                    text: "Nhận tài trợ để duy trì hoạt động tổ chức.",
                    stats: { knowledge: -1, social: -4, impact: 0 },
                    message: "Việc thỏa hiệp với những hành vi gây hại cho xã hội làm tổ chức đánh mất tính độc lập và mục đích ban đầu, dẫn đến sự suy giảm niềm tin của quần chúng."
                },
                {
                    text: "Từ chối và công khai hành vi mua chuộc.",
                    stats: { knowledge: 0, social: 2, impact: 3 },
                    message: "Giữ vững lập trường và nguyên tắc giúp bảo vệ lợi ích chung, khẳng định vai trò của tổ chức trong việc đại diện và bảo vệ quyền lợi của cộng đồng."
                }
            ]
        },
        {
            title: "Từ thiện",
            content: "Bạn tham gia một hoạt động từ thiện nhằm hỗ trợ người nghèo và những nhóm yếu thế trong xã hội. Câu hỏi đặt ra là nên giúp đỡ theo cách nào để mang lại hiệu quả lâu dài.",
            options: [
                {
                    text: "Trao quà và tiền hỗ trợ ngắn hạn rồi kết thúc hoạt động.",
                    stats: { knowledge: 0, social: 1, impact: 0 },
                    message: "Cách làm mang tính hình thức có thể giúp xoa dịu khó khăn trước mắt, nhưng không giải quyết được nguyên nhân sâu xa của nghèo đói."
                },
                {
                    text: "Hỗ trợ kiến thức, kỹ năng và mô hình sinh kế bền vững.",
                    stats: { knowledge: 2, social: 0, impact: 4 },
                    message: "Giúp quần chúng phát huy nội lực và khả năng tự vươn lên mới là con đường tạo ra sự thay đổi bền vững trong đời sống xã hội."
                }
            ]
        }
    ],
    default: [
        {
            title: "Thử thách chung",
            content: "Trong quá trình làm việc, bạn gặp một khó khăn vượt quá dự tính. Vấn đề có thể giải quyết một mình, nhưng sẽ tốn nhiều thời gian và dễ sai sót, hoặc có thể nhờ sự hỗ trợ từ đồng nghiệp.",
            options: [
                {
                    text: "Tự mình tìm cách giải quyết.",
                    stats: { knowledge: 1, social: -1, impact: 0 },
                    message: "Tinh thần tự lực giúp bạn rèn luyện năng lực cá nhân, nhưng nếu tách rời khỏi tập thể sẽ hạn chế sức mạnh chung và hiệu quả lâu dài."
                },
                {
                    text: "Chủ động trao đổi và nhờ đồng nghiệp hỗ trợ.",
                    stats: { knowledge: 0, social: 2, impact: 1 },
                    message: "Hợp tác và chia sẻ kinh nghiệm giúp phát huy sức mạnh tập thể, cho thấy con người chỉ phát triển toàn diện trong các mối quan hệ xã hội."
                }
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