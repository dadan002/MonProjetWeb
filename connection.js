// Fonction pour la validation du formulaire d'inscription
function regconditions() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;
    const date = document.getElementById('date').value;
    const terms = document.getElementById('terms').checked;
    const errormessage = document.getElementById('error-message');

    // On désactive le bouton d'inscription par défaut
    document.getElementById('bt-register').disabled = true;
    errormessage.style.color = 'red';
    errormessage.innerHTML = ''; // On réinitialise le message d'erreur

    // 1. Vérification du nom d'utilisateur
    if (!username) {
        errormessage.innerHTML = 'Le nom d\'utilisateur ne peut pas être vide.';
        return false;
    }

    // 2. Vérification de l'email
    if (!email) {
        errormessage.innerHTML = 'L\'adresse email ne peut pas être vide.';
        return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
        errormessage.innerHTML = 'L\'email doit contenir un "@" et un ".".';
        return false;
    }
    if (email.indexOf(" ") !== -1) {
        errormessage.innerHTML = 'L\'email ne peut pas contenir d\'espaces.';
        return false;
    }
    let parts = email.split("@");
    if (parts.length !== 2) {
        errormessage.innerHTML = 'L\'email doit contenir un seul "@".';
        return false;
    }
    const before_at = parts[0];
    const after_at = parts[1];
    if (before_at.length < 5) {
        errormessage.innerHTML = 'L\'email doit contenir au moins 5 caractères avant le "@".';
        return false;
    }
    if (after_at.length < 3) {
        errormessage.innerHTML = 'L\'email doit contenir au moins 3 caractères après le "@".';
        return false;
    }
    if (!after_at.includes(".")) {
        errormessage.innerHTML = 'L\'email doit contenir un "." après le "@".';
        return false;
    }
    if (after_at.startsWith(".") || after_at.endsWith('.')) {
        errormessage.innerHTML = 'L\'email ne peut pas commencer ni se terminer par un ". " après le "@".';
        return false;
    }

    // 3. Vérification du mot de passe
    if (!password) {
        errormessage.innerHTML = 'Le mot de passe ne peut pas être vide.';
        return false;
    }
    if (password.length < 8) {
        errormessage.innerHTML = 'Le mot de passe doit contenir au moins 8 caractères.';
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        errormessage.innerHTML = 'Le mot de passe doit contenir au moins une majuscule.';
        return false;
    }
    if (!/[a-z]/.test(password)) {
        errormessage.innerHTML = 'Le mot de passe doit contenir au moins une minuscule.';
        return false;
    }
    if (!/[0-9]/.test(password)) {
        errormessage.innerHTML = 'Le mot de passe doit contenir au moins un chiffre.';
        return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errormessage.innerHTML = 'Le mot de passe doit contenir au moins un caractère spécial.';
        return false;
    }

    // 4. Vérification de la confirmation du mot de passe
    if (confirm !== password) {
        errormessage.innerHTML = 'La confirmation du mot de passe ne correspond pas.';
        return false;
    }

    // 5. Vérification de l'âge
    if (!date) {
        errormessage.innerHTML = 'Veuillez renseigner votre date de naissance.';
        return false;
    }
    const today = new Date();
    const birth = new Date(date);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    if (age < 18) {
        errormessage.innerHTML = 'Vous devez avoir 18 ans ou plus pour vous inscrire.';
        return false;
    }

    // 6. Vérification des conditions générales
    if (!terms) {
        errormessage.innerHTML = 'Vous devez accepter les termes et conditions.';
        return false;
    }

    // Si toutes les vérifications sont passées
    errormessage.innerHTML = '';
    document.getElementById('bt-register').disabled = false;
    return true;
}

// Les autres fonctions de votre script (toggleAuthMenu, ProductsMenu, etc.)
// ... (pas de changements nécessaires) ...