// --- FILE: js/game.js ---

// TRẠNG THÁI GAME
let currentQuestionIndex = 0;
let currentPhase = 1; 
let assignedCareerId = null;
let currentScenarioList = [];
let playerStats = { knowledge: 0, social: 0, impact: 0 };

// Biến tạm để lưu lựa chọn ở Bước 1
let pendingStats = null; 

function confirmQuitGame() {
    // Hiện hộp thoại xác nhận
    if (confirm("Bạn đang chơi trò này, bạn có chắc chắn muốn thoát?")) {
        backToIntro(); // Nếu chọn OK thì gọi hàm quay về màn hình chính
        return true;
    }
    return false; // Nếu chọn Cancel thì không làm gì
}

// --- KHỞI ĐỘNG GAME ---
function startGame() {
    document.getElementById('intro-screen').classList.add('d-none');
    document.getElementById('game-container').classList.remove('d-none');
    
    // Reset
    playerStats = { knowledge: 0, social: 0, impact: 0 };
    currentPhase = 1;
    currentQuestionIndex = 0;
    assignedCareerId = null;
    pendingStats = null;
    
    // Ẩn Chatbot lúc bắt đầu
    document.getElementById('chatbot-trigger').classList.add('d-none');
    document.getElementById('chatbot-modal').classList.add('d-none');

    renderQuestion(initialQuestions[0]);
}

function backToIntro() {
    document.getElementById('game-container').classList.add('d-none');
    document.getElementById('intro-screen').classList.remove('d-none');
    
    // Reset Chatbot UI khi thoát ra
    document.getElementById('chatbot-trigger').classList.add('d-none');
    document.getElementById('chatbot-modal').classList.add('d-none');
    
    const intro = document.getElementById('intro-screen');
    intro.classList.remove('animate-fade-in');
    void intro.offsetWidth; 
    intro.classList.add('animate-fade-in');
}

// --- HIỂN THỊ CÂU HỎI ---
function renderQuestion(questionData) {
    // Ẩn Chatbot
    document.getElementById('chatbot-trigger').classList.add('d-none');
    document.getElementById('chatbot-modal').classList.add('d-none');

    const container = document.getElementById('game-container');
    const totalQuestions = currentPhase === 1 ? initialQuestions.length : currentScenarioList.length;
    const phaseTitle = currentPhase === 1 ? 'PHASE 1: NHẬN THỨC' : `PHASE 2: ${getCareerName()}`;

    const hudHTML = `
        <div class="stats-bar-modern animate-fade-in sticky-top pt-2 pb-3 bg-game-transparent" style="z-index: 10;">
            <div class="stat-pill know"><i class="bi bi-cpu-fill"></i> ${playerStats.knowledge}</div>
            <div class="stat-pill soc"><i class="bi bi-people-fill"></i> ${playerStats.social}</div>
            <div class="stat-pill imp"><i class="bi bi-lightning-charge-fill"></i> ${playerStats.impact}</div>
        </div>
    `;

    const cardHTML = `
        <div class="glass-card p-4 p-md-5 animate-pop mt-2">
            <div class="d-flex justify-content-between align-items-center mb-3 border-bottom border-secondary pb-2">
                <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-outline-secondary me-3 border-0 rounded-circle text-white-50" 
                            onclick="openConfirmModal()"><i class="bi bi-arrow-left fs-5"></i></button>
                    
                    <span class="text-warning text-uppercase fw-bold small ls-2">${phaseTitle}</span>
                </div>
                <span class="badge bg-secondary rounded-pill">Câu ${currentQuestionIndex + 1}/${totalQuestions}</span>
            </div>

            <h3 class="game-question-title mb-3 text-white">${questionData.title}</h3>
            <p class="lead mb-4 text-light-50">${questionData.content}</p>
            
            ${questionData.source ? `
                <div class="alert border-start border-warning border-4 mb-4" style="background: rgba(0, 0, 0, 0.8);">
                    <div class="d-flex">
                        <i class="bi bi-lightbulb-fill text-warning me-2 mt-1"></i> 
                        <span class="text-white fst-italic">${questionData.source}</span>
                    </div>
                </div>
            ` : ''}
            
            <div class="d-grid gap-3" id="options-area">
                ${questionData.options.map((opt, index) => `
                    <button class="btn btn-option-modern p-3 text-start option-btn" id="btn-opt-${index}" onclick="handleAnswer(${index})">
                        <div class="d-flex align-items-center">
                            <span class="badge bg-dark border border-secondary me-3">${String.fromCharCode(65 + index)}</span>
                            <span class="fw-medium">${opt.text}</span>
                        </div>
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    container.innerHTML = hudHTML + cardHTML;
}

// --- BƯỚC 1: XỬ LÝ KHI CHỌN ĐÁP ÁN (CHƯA QUA CÂU) ---
function handleAnswer(optionIndex) {
    const list = currentPhase === 1 ? initialQuestions : currentScenarioList;
    const currentQ = list[currentQuestionIndex];
    const choice = currentQ.options[optionIndex];

    // 1. Cộng điểm NGAY LẬP TỨC (Không chờ chọn lý do nữa)
    playerStats.knowledge += (choice.stats.knowledge || 0);
    playerStats.social += (choice.stats.social || 0);
    playerStats.impact += (choice.stats.impact || 0);

    // 2. Disable các nút để không chọn lại
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
    });
    // Highlight nút vừa chọn
    const selectedBtn = document.getElementById(`btn-opt-${optionIndex}`);
    selectedBtn.style.opacity = '1';
    selectedBtn.style.borderColor = '#fca311'; // Màu vàng cam

    // 3. Hiện Chatbot NGAY LẬP TỨC để giải thích
    showExplanation(choice.explanation || choice.message || "Ghi nhận quan điểm của bạn.");
}

// --- HÀM HIỂN THỊ GIẢI THÍCH (Thay thế cho renderChat cũ) ---
function showExplanation(explanationText) {
    const modal = document.getElementById('chatbot-modal');
    const chatContent = document.getElementById('chat-content');
    
    // Tạo nội dung Chatbot: Lời giải thích + Nút Tiếp tục
    chatContent.innerHTML = `
        <div class="msg-robot animate-pop">
            <strong><i class="bi bi-lightbulb-fill text-warning"></i> Trợ lý Tư tưởng phân tích:</strong><br>
            <div class="mt-2 text-light-50" style="text-align: justify; line-height: 1.5;">
                ${explanationText}
            </div>
        </div>
        
        <div class="mt-3 text-end">
            <button class="btn btn-warning btn-sm rounded-pill fw-bold px-4 shadow" onclick="nextQuestion()">
                Tiếp tục <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    `;

    // Hiện Chatbot
    modal.classList.remove('d-none');
    modal.classList.add('animate-pop');
    
    // Hiện icon trigger (để đẹp thôi, không cần bấm)
    document.getElementById('chatbot-trigger').classList.remove('d-none');
}

// --- HÀM CHUYỂN CÂU HỎI (Được gọi khi bấm nút "Tiếp tục") ---
function nextQuestion() {
    // 1. Ẩn Chatbot
    document.getElementById('chatbot-modal').classList.add('d-none');
    document.getElementById('chatbot-trigger').classList.add('d-none');

    const list = currentPhase === 1 ? initialQuestions : currentScenarioList;

    // 2. Tăng index
    currentQuestionIndex++;

    // 3. Kiểm tra xem còn câu hỏi không
    if (currentQuestionIndex < list.length) {
        renderQuestion(list[currentQuestionIndex]);
    } else {
        // Hết câu hỏi -> Chuyển màn
        if (currentPhase === 1) showPhase1ResultSelection(); // Gọi hàm chọn nghề mới
        else showFinalEnding();
    }
}

// --- (CÁC HÀM showPhase1Result, showFinalEnding, getCareerName GIỮ NGUYÊN) ---
function showPhase1ResultSelection() {
    const container = document.getElementById('game-container');
    
    // 1. Tính điểm phù hợp cho TẤT CẢ các nghề
    // Công thức: Difference = |Player_K - Job_K| + |Player_S - Job_S| + |Player_I - Job_I|
    // Difference càng NHỎ thì càng PHÙ HỢP.
    const scoredCareers = careers.map(career => {
        const diffK = Math.abs(playerStats.knowledge - career.statsReq.knowledge);
        const diffS = Math.abs(playerStats.social - career.statsReq.social);
        const diffI = Math.abs(playerStats.impact - career.statsReq.impact);
        const totalDiff = diffK + diffS + diffI;
        
        // Tính % phù hợp (giả định sai số tối đa khoảng 20 điểm)
        const matchPercent = Math.max(0, 100 - (totalDiff * 5)); 

        return { ...career, diff: totalDiff, match: matchPercent };
    });

    // 2. Sắp xếp theo độ phù hợp (diff tăng dần) và lấy Top 4
    scoredCareers.sort((a, b) => a.diff - b.diff);
    const top4Careers = scoredCareers.slice(0, 4);

    // 3. Render giao diện chọn nghề
    let cardsHTML = top4Careers.map(c => `
        <div class="col-md-6 mb-4">
            <div class="glass-card p-4 h-100 hover-scale text-start position-relative border-secondary" style="transition:0.3s">
                <div class="d-flex justify-content-between mb-2">
                    <h4 class="text-warning mb-0 font-heading">${c.name}</h4>
                    <span class="badge bg-success bg-opacity-25 text-success border border-success"></span>
                </div>
                <p class="text-white-50 small mb-3" style="min-height: 40px">${c.description}</p>
                
                <div class="d-flex gap-2 mb-4 small text-light opacity-75">
                    <span><i class="bi bi-cpu"></i> ${c.statsReq.knowledge}</span>
                    <span><i class="bi bi-people"></i> ${c.statsReq.social}</span>
                    <span><i class="bi bi-lightning"></i> ${c.statsReq.impact}</span>
                </div>

                <button onclick="selectCareer('${c.id}')" class="btn btn-outline-warning w-100 rounded-pill fw-bold">
                    CHỌN CON ĐƯỜNG NÀY
                </button>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="container animate-pop">
            <div class="text-center mb-5">
                <span class="badge border border-info text-info mb-2 px-3 py-2 rounded-pill ls-2">PHÂN CÔNG LAO ĐỘNG</span>
                <h2 class="display-5 fw-bold text-white font-heading">LỰA CHỌN CỦA LỊCH SỬ</h2>
                <p class="text-light-50 mx-auto" style="max-width: 700px;">
                    "Dựa trên năng lực (Cái Riêng) và nhu cầu thời đại (Cái Chung), đây là 4 vị trí phù hợp nhất để bạn đóng góp cho xã hội. Hãy chọn một."
                </p>
                <div class="mt-3">
                    <small class="text-white-50 border border-secondary px-3 py-1 rounded-pill">
                        Chỉ số hiện tại: 🧠 ${playerStats.knowledge} | 🤝 ${playerStats.social} | ⚡ ${playerStats.impact}
                    </small>
                </div>
            </div>

            <div class="row justify-content-center">
                ${cardsHTML}
            </div>
        </div>
    `;
}

function selectCareer(careerId) {
    assignedCareerId = careerId;
    
    // Tìm thông tin nghề để hiển thị thông báo chuyển cảnh
    const career = careers.find(c => c.id === careerId);
    
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <div class="glass-card text-center p-5 animate-fade-in" style="margin-top: 10vh;">
            <div class="mb-4"><i class="bi bi-check-circle-fill text-success display-1"></i></div>
            <h2 class="text-white mb-3">BẠN ĐÃ TRỞ THÀNH: <br><span class="text-warning display-4 font-heading">${career.name.toUpperCase()}</span></h2>
            <p class="lead text-white-50 mb-5">
                "Bây giờ, hãy dùng vai trò này để giải quyết các mâu thuẫn thực tiễn."
            </p>
            <button class="btn btn-primary-glow btn-lg px-5 py-3 rounded-pill fw-bold" onclick="startPhase2()">
                BƯỚC VÀO THỰC TIỄN (PHASE 2) <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    `;
}

function startPhase2() {
    currentPhase = 2;
    currentQuestionIndex = 0;
    currentScenarioList = careerScenarios[assignedCareerId] || careerScenarios['default'];
    renderQuestion(currentScenarioList[0]);
}

function showFinalEnding() {
    let resultKey = "bad_ending_passive"; 
    const { knowledge, social, impact } = playerStats;
    if (knowledge >= 6 && social >= 6 && impact >= 6) resultKey = "true_ending"; 
    else if (impact > social + 3) resultKey = "bad_ending_tyrant"; 
    else if (knowledge > social + 3) resultKey = "bad_ending_isolation"; 
    
    const res = finalEndings[resultKey];
    const btnClass = resultKey === 'true_ending' ? 'btn-success' : 'btn-outline-light';
    const textClass = `text-${res.color}`;

    const container = document.getElementById('game-container');
    container.innerHTML = `
        <div class="glass-card text-center p-5 animate-pop shadow-lg" style="border: 1px solid rgba(255,255,255,0.1);">
            <div class="mb-3 display-1 animate-bounce">${res.icon}</div>
            <h5 class="text-uppercase text-white-50 ls-2">${res.subtitle}</h5>
            <h1 class="display-4 fw-bold ${textClass} mb-4 font-heading">${res.title}</h1>
            <div class="p-4 bg-black bg-opacity-25 rounded-3 mb-4 mx-auto" style="max-width: 700px;">
                <p class="fs-5 text-light fst-italic mb-0 line-height-lg">"${res.content}"</p>
            </div>
            <div class="row justify-content-center mb-5">
                <div class="col-auto"><span class="badge bg-dark border border-secondary p-2">🧠 ${knowledge}</span></div>
                <div class="col-auto"><span class="badge bg-dark border border-secondary p-2">🤝 ${social}</span></div>
                <div class="col-auto"><span class="badge bg-dark border border-secondary p-2">⚡ ${impact}</span></div>
            </div>
            <div class="d-flex justify-content-center gap-3">
                <button class="btn btn-outline-secondary btn-lg px-4 rounded-pill" onclick="backToIntro()">Menu</button>
                <button class="${btnClass} btn-lg px-5 rounded-pill" onclick="startGame()"><i class="bi bi-arrow-repeat me-2"></i> CHƠI LẠI</button>
            </div>
        </div>
    `;
}

function getCareerName() {
    const c = careers.find(x => x.id === assignedCareerId);
    return c ? c.name.toUpperCase() : 'NHIỆM VỤ';
}

// --- [NEW] XỬ LÝ CUSTOM MODAL ---

// 1. Mở Modal
function openConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) modal.classList.remove('d-none');
}

// 2. Đóng Modal (Khi bấm "Ở lại")
function closeConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) modal.classList.add('d-none');
}

// 3. Xử lý khi bấm nút "Thoát Game" trong Modal
function processExitGame() {
    closeConfirmModal(); // Đóng modal
    backToIntro();       // Gọi hàm quay về màn hình Intro
    
    // Đảm bảo giao diện chuyển về tab Game (trường hợp bấm từ thanh Menu)
    // Lưu ý: switchTab nằm bên main.js, nhưng ta có thể thao tác DOM trực tiếp để an toàn
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('d-none'));
    document.getElementById('view-game').classList.remove('d-none');
    
    // Reset active nav button
    document.querySelectorAll('.btn-nav').forEach(btn => btn.classList.remove('active'));
    const gameBtn = document.querySelector('button[data-tab="game"]');
    if(gameBtn) gameBtn.classList.add('active');
}