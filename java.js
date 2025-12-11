// ============================================
// ENCOM GAMES - LOGIN INTERACTIVO
// ============================================

// ============ TOGGLE PASSWORD ============
const togglePasswordBtn = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', function() {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        
        // Cambiar el icono
        this.textContent = isPassword ? '🙈' : '👁️';
        
        // Efecto visual
        this.style.transform = 'scale(1.3)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });

    // Cambiar color al pasar mouse
    togglePasswordBtn.addEventListener('mouseover', function() {
        this.style.color = '#ff00ff';
    });

    togglePasswordBtn.addEventListener('mouseout', function() {
        this.style.color = '#00d9ff';
    });
}

// ============ VALIDACIÓN Y ENVÍO FORMULARIO ============
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        
        // Validaciones básicas
        if (!email || !password) {
            mostrarAlerta('❌ ERROR: Completa todos los campos', 'error');
            return;
        }
        
        if (!email.includes('@')) {
            mostrarAlerta('❌ ERROR: Email inválido', 'error');
            return;
        }
        
        if (password.length < 6) {
            mostrarAlerta('❌ ERROR: La contraseña debe tener al menos 6 caracteres', 'error');
            return;
        }
        
        // Simular envío exitoso
        mostrarAlerta('✅ ACCESO CONCEDIDO - Bienvenido a ENCOM', 'success');
        
        // Limpiar formulario
        setTimeout(() => {
            loginForm.reset();
            passwordInput.type = 'password';
            togglePasswordBtn.textContent = '👁️';
        }, 1500);
    });
}

// ============ BOTONES SOCIALES ============
const googleBtn = document.getElementById('googleLogin');
const facebookBtn = document.getElementById('facebookLogin');

if (googleBtn) {
    googleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarAlerta('🔵 Conectando con Google...', 'info');
        console.log('Google Login simulado');
    });
}

if (facebookBtn) {
    facebookBtn.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarAlerta('🔵 Conectando con Facebook...', 'info');
        console.log('Facebook Login simulado');
    });
}

// ============ BOTÓN CREAR CUENTA ============
const signupBtn = document.getElementById('signupBtn');

if (signupBtn) {
    signupBtn.addEventListener('click', function() {
        mostrarAlerta('📝 Función de registro en desarrollo', 'info');
        console.log('Crear cuenta');
    });
}

// ============ ENLACE OLVIDÉ CONTRASEÑA ============
const forgotLink = document.getElementById('forgotLink');

if (forgotLink) {
    forgotLink.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarAlerta('📧 Se enviará un correo de recuperación', 'info');
        console.log('Olvidé contraseña');
    });
}

// ============ FUNCIÓN PARA MOSTRAR ALERTAS ============
function mostrarAlerta(mensaje, tipo = 'info') {
    // Crear contenedor de alerta
    const alerta = document.createElement('div');
    alerta.className = `alerta alerta-${tipo}`;
    alerta.textContent = mensaje;
    
    // Agregar estilos dinámicos
    alerta.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 0;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.4s ease;
        letter-spacing: 1px;
        font-size: 0.95rem;
        border: 2px solid;
    `;
    
    // Colores según tipo
    if (tipo === 'success') {
        alerta.style.background = 'rgba(0, 217, 255, 0.2)';
        alerta.style.borderColor = '#00d9ff';
        alerta.style.color = '#00d9ff';
        alerta.style.textShadow = '0 0 10px #00d9ff';
    } else if (tipo === 'error') {
        alerta.style.background = 'rgba(255, 0, 0, 0.2)';
        alerta.style.borderColor = '#ff0000';
        alerta.style.color = '#ff0000';
        alerta.style.textShadow = '0 0 10px #ff0000';
    } else {
        alerta.style.background = 'rgba(255, 0, 255, 0.2)';
        alerta.style.borderColor = '#ff00ff';
        alerta.style.color = '#ff00ff';
        alerta.style.textShadow = '0 0 10px #ff00ff';
    }
    
    document.body.appendChild(alerta);
    
    // Remover alerta después de 4 segundos
    setTimeout(() => {
        alerta.style.animation = 'slideOut 0.4s ease';
        setTimeout(() => {
            alerta.remove();
        }, 400);
    }, 4000);
}

// ============ EFECTOS DE GLITCH AL PASAR MOUSE ============
document.addEventListener('mousemove', function(e) {
    const glitchHeader = document.querySelector('.glitch-header');
    if (glitchHeader) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Efecto sutil de parallax
        glitchHeader.style.transform = `perspective(1000px) 
            rotateX(${(y - 0.5) * 5}deg) 
            rotateY(${(x - 0.5) * 5}deg)`;
    }
});

// ============ AGREGAR ANIMACIÓN KEYFRAMES DINÁMICAMENTE ============
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(style);

// ============ EFECTOS DE ENTRADA ============
window.addEventListener('load', function() {
    // Efecto de carga en el formulario
    const formContainer = document.querySelector('.login-form-container');
    const signupPanel = document.querySelector('.signup-panel');
    
    if (formContainer) {
        formContainer.style.opacity = '0';
        formContainer.style.animation = 'fadeInUp 0.8s ease forwards';
        formContainer.style.animationDelay = '0.2s';
    }
    
    if (signupPanel) {
        signupPanel.style.opacity = '0';
        signupPanel.style.animation = 'fadeInUp 0.8s ease forwards';
        signupPanel.style.animationDelay = '0.4s';
    }
});

// Agregar animación fadeInUp
const fadeInUpStyle = document.createElement('style');
fadeInUpStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeInUpStyle);

console.log('🎮 ENCOM Games Login System Loaded - Sistema Arcade Activo');
