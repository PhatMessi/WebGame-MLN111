// --- FILE: js/game.js ---

// TRẠNG THÁI GAME
let currentQuestionIndex = 0;
let currentPhase = 1; 
let assignedCareerId = null;
let currentScenarioList = [];
let playerStats = { knowledge: 0, social: 0, impact: 0 };

// Biến tạm để lưu lựa chọn ở Bước 1
let pendingStats = null; 

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
    // Ẩn Chatbot mỗi khi sang câu mới
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
                            onclick="backToIntro()"><i class="bi bi-arrow-left fs-5"></i></button>
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
    const choice = list[currentQuestionIndex].options[optionIndex];

    // 1. Lưu tạm điểm số, chưa cộng ngay
    pendingStats = choice.stats;

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

    // 3. Hiện Icon Chatbot ở góc phải
    const chatTrigger = document.getElementById('chatbot-trigger');
    chatTrigger.classList.remove('d-none');
    
    // 4. Chuẩn bị nội dung cho Chatbot
    renderChat(list[currentQuestionIndex]);
}

// --- LOGIC CHATBOT ---
function toggleChat() {
    const modal = document.getElementById('chatbot-modal');
    // Nếu đang ẩn thì hiện (bỏ d-none), đang hiện thì ẩn (thêm d-none)
    if (modal.classList.contains('d-none')) {
        modal.classList.remove('d-none');
        modal.classList.add('animate-pop'); // Thêm hiệu ứng
    } else {
        modal.classList.add('d-none');
    }
}

function renderChat(questionData) {
    const chatContent = document.getElementById('chat-content');
    
    // Lấy danh sách lý do (Nếu trong data chưa có reasonings, dùng mảng mặc định để tránh lỗi)
    const reasons = questionData.reasonings || [
        { text: "Vì đó là điều hợp lý nhất.", bonus: { knowledge: 1 } },
        { text: "Vì tôi cảm thấy nên làm vậy.", bonus: { social: 1 } }
    ];

    chatContent.innerHTML = `
        <div class="msg-robot">
            <strong><i class="bi bi-lightbulb"></i> Trợ lý:</strong><br>
            Căn cứ vào đâu bạn đưa ra lựa chọn này? Hãy giải thích quan điểm của bạn.
        </div>
        <div class="mt-3">
            ${reasons.map((r, idx) => `
                <button class="btn-reason" onclick="confirmReasoning(${idx})">
                    ${idx + 1}. ${r.text}
                </button>
            `).join('')}
        </div>
    `;
}

// --- BƯỚC 2: XÁC NHẬN LÝ DO -> CỘNG ĐIỂM -> QUA CÂU ---
function confirmReasoning(reasonIndex) {
    const list = currentPhase === 1 ? initialQuestions : currentScenarioList;
    const currentQ = list[currentQuestionIndex];
    
    // Lấy bonus từ lý do (nếu có)
    const reasons = currentQ.reasonings || [{ bonus: {} }, { bonus: {} }];
    const bonus = reasons[reasonIndex].bonus || {};

    // 1. Cộng tổng điểm (Điểm đáp án + Điểm lý do)
    if (pendingStats) {
        playerStats.knowledge += (pendingStats.knowledge || 0) + (bonus.knowledge || 0);
        playerStats.social += (pendingStats.social || 0) + (bonus.social || 0);
        playerStats.impact += (pendingStats.impact || 0) + (bonus.impact || 0);
    }

    // 2. Ẩn Chat
    toggleChat();
    document.getElementById('chatbot-trigger').classList.add('d-none');

    // 3. Chuyển câu hỏi (Logic cũ)
    currentQuestionIndex++;
    if (currentQuestionIndex < list.length) {
        // Delay 1 chút cho mượt
        setTimeout(() => {
            renderQuestion(list[currentQuestionIndex]);
        }, 300);
    } else {
        if (currentPhase === 1) showPhase1Result();
        else showFinalEnding();
    }
}

// --- (CÁC HÀM showPhase1Result, showFinalEnding, getCareerName GIỮ NGUYÊN) ---
function showPhase1Result() {
    let bestCareer = careers[0];
    let minDiff = 9999;
    careers.forEach(career => {
        let diff = 0;
        if (career.statsReq.knowledge) diff += Math.abs(playerStats.knowledge - career.statsReq.knowledge);
        if (career.statsReq.social) diff += Math.abs(playerStats.social - career.statsReq.social);
        if (career.statsReq.impact) diff += Math.abs(playerStats.impact - career.statsReq.impact);
        if (diff < minDiff) { minDiff = diff; bestCareer = career; }
    });
    assignedCareerId = bestCareer.id;
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <div class="glass-card text-center p-5 animate-pop border-top border-warning border-5">
            <h4 class="text-white-50 mb-3">KẾT THÚC GIAI ĐOẠN NHẬN THỨC</h4>
            <div class="mb-4"><i class="bi bi-person-badge text-warning display-1"></i></div>
            <h2 class="display-4 fw-bold text-white mb-2">${bestCareer.name}</h2>
            <p class="lead text-light mb-4 px-md-5">${bestCareer.description}</p>
            <div class="alert alert-dark d-inline-block px-4 py-2 mb-4 border border-secondary rounded-pill">
                <small>Dựa trên chỉ số: 🧠 ${playerStats.knowledge} | 🤝 ${playerStats.social} | ⚡ ${playerStats.impact}</small>
            </div>
            <div class="d-flex justify-content-center gap-3">
                <button class="btn btn-outline-light btn-lg px-4 rounded-pill" onclick="backToIntro()">Menu</button>
                <button class="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg" onclick="startPhase2()">TIẾP TỤC <i class="bi bi-arrow-right"></i></button>
            </div>
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