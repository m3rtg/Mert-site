<script>
    export let form;
</script>

<div class="admin-login-container">
    <div class="admin-login-box">
        <h1>Admin Girişi</h1>
        
        {#if form?.error}
            <p class="error-msg">{form.error}</p>
        {/if}

        <form method="POST">
            <div class="input-group">
                <label for="username">Kullanıcı Adı</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input-group">
                <label for="password">Şifre</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class="login-btn">
                Giriş Yap
            </button>
        </form>
    </div>
</div>

<style>
    .admin-login-container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 80vh;
        font-family: system-ui, -apple-system, sans-serif;
    }

    .admin-login-box {
        background-color: #1a1a1a;
        padding: 2.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        width: 100%;
        max-width: 400px;
        border: 1px solid #333;
        color: #f0f0f0;
    }

    .admin-login-box h1 {
        text-align: center;
        margin-top: 0;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        color: #e0e0e0;
    }

    .error-msg {
        background-color: rgba(239, 68, 68, 0.1);
        color: #ef4444;
        padding: 0.75rem;
        border-radius: 8px;
        font-size: 0.875rem;
        margin-bottom: 1rem;
        border: 1px solid rgba(239, 68, 68, 0.3);
    }

    .input-group {
        margin-bottom: 1.25rem;
    }

    .input-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        color: #a0a0a0;
    }

    .input-group input {
        width: 100%;
        padding: 0.75rem;
        background-color: #2a2a2a;
        border: 1px solid #444;
        border-radius: 8px;
        color: #fff;
        font-size: 1rem;
        box-sizing: border-box;
        transition: border-color 0.2s;
    }
    
    .input-group input:focus {
        outline: none;
        border-color: #555;
    }

    .login-btn {
        width: 100%;
        padding: 0.75rem;
        background-color: #3b82f6;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s;
        margin-top: 0.5rem;
    }

    .login-btn:hover {
        background-color: #2563eb;
    }
</style>
