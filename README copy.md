H
# case
=======
## Soal Interview
- Membuat Dockerfile.
- Membuat manifest untuk deployment boleh memilih antara compose file untuk **Docker Swarm** atau YAML manifest untuk **Kubernetes**.

## API Service
- Informasi Web Service:
    - Bahasa pemograman: **Typescript**
    - Framework: **Express.js**
    - Node: **v12.20**
    - Port: **3300**
- Setelah install node, harap install dependencies terlebih dahulu menggunakan command `npm ci` pada project root.
- Service dapat dijalankan dengan menggunakan command `npm run serve:local`.
- Compile dapat dilakukan dengan command `tsc --build tsconfig.json` atau `npm run build`
- Service berikut menggunakan Environment Variable untuk mengambil variable seperti port, service_name, dll **(lihat file .env)**
- **Testing API service**:
    - Jika service sudah berhasil running maka akan muncul log seperti berikut:
    ```
    {
        service: 'devops-interview-test',
        environment: 'staging',
        status: 'OK',
        level: 'info',
        message: 'server running on port: 3300',
        timestamp: '01-03-2021T13:37:36.483+07:00'
    }
    ```
    - Testing dapat dilakukan dengan membuka terminal/console baru dan execute command berikut: `curl localhost:3300/api/v1`
    - Jika service berjalan dengan baik maka akan mendapatkan response seperti berikut:
    ```
    {"status":"OK","message":"Hi! your devops-interview-test service is working."}
    ```

## Docker
- API Service yang akan running dalam container sudah harus dalam bentuk **Javascript** (Hasil compile dari Typescript)
- Docker container harus berjalan dengan menggunakan user `uid=1000`, tidak boleh running sebagai `root`.
- Container port yang diekspose sama seperti port pada service yaitu `3300`
- **Nilai Tambahan** jika dapat mengimplementasikan [multi-stage build](https://docs.docker.com/develop/develop-images/multistage-build/).

## Deployment
- Pilih salah satu Container Orchestrator antara **Docker Swarm** atau **Kubernetes**
- Manifest YAML harap diletakkan dalam folder `deployment`.
- Host port menggunakan `13300`, sedangkan Container port menggunakan `3300` 
- **Nilai Tambahan** jika deployment menggunakan Kubernetes.
- **Nilai Tambahan** jika dapat implementasi Ingress pada **Docker Swarm** ataupun **Kubernetes**

## Pipeline CI/CD
- Job yang perlu dibuat adalah sebagai berikut:
    - **build**: compile Typescript dan membuat Docker Image
    - **push**: push hasil Docker Image pada job build ke Docker Hub public
    - **deploy**: menggunakan Docker Compose/Swarm atau Kubernetes
- Boleh menggunakan `Github Actions` atau `Gitlab CI` sebagai CI/CD Orchestrator.

## Catatan
- Harap tidak mengubah file apapun yang sudah tersedia dalam project ini.
- Waktu pengerjaan adalah 3 hari.
- Jika ada pertanyaan atau memerlukan penambahan waktu dalam pengerjaan, silakan menghubungi email yang tertera pada email.
>>>>>>> push code
