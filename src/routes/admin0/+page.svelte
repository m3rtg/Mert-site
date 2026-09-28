<script>
    import { enhance } from '$app/forms';
    export let data;
    const { projects, skills } = data;

    let editingProjectId = null;
    
    function resetForm() {
        return async ({ update }) => {
            await update();
            editingProjectId = null;
        };
    }
</script>

<div class="admin-dashboard">
    <div class="container">
        <header>
            <h1>Admin Paneli</h1>
            <form method="POST" action="?/logout" use:enhance>
                <button type="submit" class="logout-btn">Çıkış Yap</button>
            </form>
        </header>

        <div class="dashboard-grid">
            <!-- Projeler Bölümü -->
            <section class="card">
                <h2>Projeler ({projects.length})</h2>
                
                <div class="list-container">
                    {#if projects.length === 0}
                        <p class="empty-msg">Henüz proje eklenmemiş.</p>
                    {/if}
                    {#each projects as project}
                        <div class="list-item-column">
                            <div class="list-item-header">
                                <span class="item-title">{project.order}. {project.title_tr || project.title_en}</span>
                                <div class="item-actions">
                                    <button class="edit-btn" on:click={() => editingProjectId = editingProjectId === project._id ? null : project._id}>
                                        {editingProjectId === project._id ? 'Kapat' : 'Düzenle'}
                                    </button>
                                    <form method="POST" action="?/deleteProject" use:enhance={resetForm} style="display:inline;">
                                        <input type="hidden" name="id" value={project._id} />
                                        <button class="delete-btn">Sil</button>
                                    </form>
                                </div>
                            </div>
                            
                            {#if editingProjectId === project._id}
                            <form method="POST" action="?/editProject" class="add-form edit-form" use:enhance={resetForm}>
                                <input type="hidden" name="id" value={project._id} />
                                <div class="form-row">
                                    <input type="number" name="order" value={project.order} placeholder="Sıra (örn: 1)" required>
                                    <input type="text" name="slug" value={project.slug} placeholder="URL-Slug" required>
                                </div>
                                <input type="text" name="period" value={project.period} placeholder="Tarih (örn: 2024 - 2025)">
                                <div class="form-row">
                                    <input type="text" name="category_tr" value={project.category_tr} placeholder="Kategori (TR)" required>
                                    <input type="text" name="category_en" value={project.category_en} placeholder="Kategori (EN)" required>
                                </div>
                                <div class="form-row">
                                    <input type="text" name="title_tr" value={project.title_tr} placeholder="Başlık (TR)" required>
                                    <input type="text" name="title_en" value={project.title_en} placeholder="Başlık (EN)" required>
                                </div>
                                <textarea name="desc_tr" value={project.desc_tr} placeholder="Açıklama (TR)" rows="3"></textarea>
                                <textarea name="desc_en" value={project.desc_en} placeholder="Açıklama (EN)" rows="3"></textarea>
                                <button type="submit" class="submit-btn update-btn">Güncelle</button>
                            </form>
                            {/if}
                        </div>
                    {/each}
                </div>

                <div class="divider"></div>
                <h3>Yeni Proje Ekle</h3>
                
                <form method="POST" action="?/addProject" class="add-form" use:enhance={resetForm}>
                    <div class="form-row">
                        <input type="number" name="order" placeholder="Sıra (Boş bırakılırsa sona ekler)">
                        <input type="text" name="slug" placeholder="URL-Slug (benzersiz, örn: yeni-proje)" required>
                    </div>
                    <input type="text" name="period" placeholder="Tarih (örn: 2024 - 2025)">
                    <div class="form-row">
                        <input type="text" name="category_tr" placeholder="Kategori (TR)" required>
                        <input type="text" name="category_en" placeholder="Kategori (EN)" required>
                    </div>
                    <div class="form-row">
                        <input type="text" name="title_tr" placeholder="Başlık (TR)" required>
                        <input type="text" name="title_en" placeholder="Başlık (EN)" required>
                    </div>
                    <textarea name="desc_tr" placeholder="Açıklama (TR)" rows="3"></textarea>
                    <textarea name="desc_en" placeholder="Açıklama (EN)" rows="3"></textarea>
                    <button type="submit" class="submit-btn">Projeyi Kaydet</button>
                </form>
            </section>

            <!-- Yetenekler Bölümü -->
            <section class="card">
                <h2>Yetenekler ({skills.length})</h2>
                
                <div class="list-container">
                    {#if skills.length === 0}
                        <p class="empty-msg">Henüz yetenek eklenmemiş.</p>
                    {/if}
                    {#each skills as skill}
                        <div class="list-item">
                            <span>
                                <span class="badge">{skill.category}</span>
                                <span class="item-title">{skill.name}</span> 
                            </span>
                            <form method="POST" action="?/deleteSkill" use:enhance={resetForm}>
                                <input type="hidden" name="id" value={skill._id} />
                                <button class="delete-btn">Sil</button>
                            </form>
                        </div>
                    {/each}
                </div>

                <div class="divider"></div>
                <h3>Yeni Yetenek Ekle</h3>
                
                <form method="POST" action="?/addSkill" class="add-form" use:enhance={resetForm}>
                    <select name="category" required>
                        <option value="" disabled selected>Kategori Seçiniz</option>
                        <option value="languages">Programlama Dilleri</option>
                        <option value="frameworks">Framework & Kütüphaneler</option>
                        <option value="tools">Mühendislik Araçları</option>
                    </select>
                    <input type="text" name="name" placeholder="Yetenek Adı (örn: React)" required>
                    <button type="submit" class="submit-btn">Yeteneği Kaydet</button>
                </form>
            </section>
        </div>
    </div>
</div>

<style>
    .admin-dashboard {
        min-height: 100vh;
        background-color: transparent;
        color: #e0e0e0;
        padding: 2rem;
        font-family: system-ui, -apple-system, sans-serif;
    }
    .container { max-width: 1200px; margin: 0 auto; }
    header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #333; }
    header h1 { margin: 0; font-size: 2rem; color: #fff; }
    .logout-btn { background-color: #ef4444; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .dashboard-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
    @media (min-width: 768px) { .dashboard-grid { grid-template-columns: 1fr 1fr; } }
    .card { background-color: #1a1a1a; padding: 1.5rem; border-radius: 12px; border: 1px solid #333; box-shadow: 0 4px 6px rgba(0,0,0,0.3); }
    .card h2 { margin-top: 0; margin-bottom: 1rem; font-size: 1.25rem; }
    .card h3 { margin-top: 0; margin-bottom: 1rem; font-size: 1.1rem; }
    
    .list-container { max-height: 400px; overflow-y: auto; margin-bottom: 1.5rem; padding-right: 0.5rem; }
    .empty-msg { color: #888; font-style: italic; }
    
    .list-item { display: flex; justify-content: space-between; align-items: center; background-color: #2a2a2a; padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 0.5rem; border: 1px solid #444; }
    
    .list-item-column { display: flex; flex-direction: column; background-color: #2a2a2a; padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 0.5rem; border: 1px solid #444; }
    .list-item-header { display: flex; justify-content: space-between; align-items: center; width: 100%; }
    .item-actions { display: flex; gap: 0.75rem; align-items: center; }
    
    .item-title { font-weight: 600; color: #fff; }
    .badge { background-color: #444; font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px; margin-right: 0.5rem; }
    .item-meta { color: #888; font-size: 0.85rem; }
    
    .edit-btn { background: transparent; color: #3b82f6; border: none; cursor: pointer; font-size: 0.85rem; text-decoration: underline; }
    .delete-btn { background: transparent; color: #ef4444; border: none; cursor: pointer; font-size: 0.85rem; text-decoration: underline; }
    
    .divider { height: 1px; background-color: #333; margin: 1.5rem 0; }
    
    .add-form { display: flex; flex-direction: column; gap: 0.75rem; }
    .edit-form { margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed #444; }
    .form-row { display: flex; gap: 0.75rem; }
    .form-row input { flex: 1; }
    
    .add-form input, .add-form textarea, .add-form select { width: 100%; padding: 0.75rem; background-color: #2a2a2a; border: 1px solid #444; border-radius: 8px; color: #fff; font-family: inherit; box-sizing: border-box; }
    .add-form input:focus, .add-form textarea:focus, .add-form select:focus { outline: none; border-color: #666; }
    .submit-btn { background-color: #3b82f6; color: white; border: none; padding: 0.75rem; border-radius: 8px; font-weight: bold; cursor: pointer; }
    .update-btn { background-color: #10b981; }
</style>
