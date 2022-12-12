import { createLogger, format, transports, config }  from 'winston';
import 'winston-daily-rotate-file';

const logger = createLogger({
    exitOnError: false,
    format: format.combine(
        format.timestamp({ format: 'DD-MM-YYYYTHH:mm:ss.SSS+07:00' }),
        format.json(),
        format.prettyPrint(),
    ),
    
    defaultMeta: { 
        service: process.env.SERVICE_NAME, 
    },
    transports: [
        new transports.Console(),
        new transports.File({ filename: './logs/interview-test.log' }),
        new transports.DailyRotateFile({
            filename: './logs/interview-test-%DATE%.log',
            datePattern: 'DD-MM-YYYY',
            zippedArchive: true,
            level: process.env.LOG_LEVEL || 'info'
         })
    ]
});

export default logger;