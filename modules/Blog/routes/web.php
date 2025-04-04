<?php
use Modules\Blog\Controllers\HomeController;
use Modules\Blog\Controllers\ArticleController;
use Modules\Blog\Controllers\CategoryController;
use Modules\Blog\Controllers\CommentController;
use Modules\Blog\Controllers\TagController;
use Modules\Blog\Controllers\DashboardController;
use Modules\Blog\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('Blog::auth.login');
})->middleware('guest');

Route::get('/dashboard', function () {
    return view('admin.dashboard');
})->name('dashboard');

Route::get('articles/{article}/comments', [CommentController::class, 'indexByArticle'])->name('comment.indexByArticle');
Route::delete('articles/comment/{comment}', [CommentController::class, 'destroyByArticle'])->name('comment.destroyByArticle');

Route::post('article/import', [ArticleController::class, 'import'])->name('article.import');
Route::get('article/export', [ArticleController::class, 'export'])->name('article.export');
Route::post('category/import', [CategoryController::class, 'import'])->name('category.import');
Route::get('category/export', [CategoryController::class, 'export'])->name('category.export');


Route::resource('/dashboard/comment',CommentController::class);
Route::resource('/dashboard/article',ArticleController::class);
Route::resource('/dashboard/category',CategoryController::class);
Route::resource('/dashboard/tag',TagController::class);

Auth::routes();
Route::get('/home', [HomeController::class, 'index'])->name('home');


Auth::routes();
Route::get('/public', [HomeController::class, 'publicIndex'])->name('public.public.index');
Route::get('/public/article/{id}', [HomeController::class, 'publicShow'])->name('public.public.show');
Route::post('/articles/{id}/comments', [CommentController::class, 'store'])->name('public.article.comments.store');


// Admin Routes with 'admin' role middleware
Route::group(['middleware' => ['permission:view admin']], function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('/dashboard/article', ArticleController::class);
    Route::resource('/dashboard/category', CategoryController::class);
    Route::resource('/dashboard/tag', TagController::class);
    Route::resource("/dashboard/user",UserController::class);
    // Route::get('change', [LanguageController::class, 'change'])->name("lang.change");
});
