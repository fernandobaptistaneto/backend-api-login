import crypto = require('crypto');
import "dotenv/config";

class CommonHelper {
    createPasswordHash(password: string): string {
        const hash = crypto.createHash('sha256')
        hash.update(password)
        hash.update(process.env.SECRET)
        return hash.digest('hex')
    }
}

export default new CommonHelper