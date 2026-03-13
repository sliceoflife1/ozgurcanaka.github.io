# OxWord API — Azure Functions

Bu klasör, ileride Azure Functions ile oluşturulacak API endpoint'lerini barındıracaktır.

## Planlanan Yapı

```
api/
├── login/                 ← Google ile Giriş endpoint'i
│   └── index.js
├── user/                  ← Kullanıcı profil işlemleri
│   └── index.js
├── host.json              ← Azure Functions ana yapılandırması
├── local.settings.json    ← Yerel geliştirme ortam değişkenleri (git'e dahil edilmez)
└── package.json           ← API bağımlılıkları
```

## Kurulum (Gelecek)

1. Azure Functions Core Tools'u yükleyin:

   ```bash
   npm install -g azure-functions-core-tools@4
   ```

2. Bu klasörde yeni bir fonksiyon oluşturun:

   ```bash
   func new --name login --template "HTTP trigger"
   ```

3. Yerel çalıştırma:
   ```bash
   func start
   ```

## Notlar

- `local.settings.json` dosyası `.gitignore`'da yer almalıdır (hassas veriler içerir).
- Google ile Giriş için `@azure/functions` ve `google-auth-library` paketlerini kullanın.
- Azure Static Web Apps, `/api/*` route'larını otomatik olarak Azure Functions'a yönlendirir.
