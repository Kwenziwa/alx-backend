/**
 * Author: Kwenziwa Lizwi Khanyile
 * Github: @kwenziwa
 * Date Created: February 1, 2024
 */
import kue from "kue";

const queue = kue.createQueue();

const sendNotification = (phoneNumber, message) => {
  console.log(
    `Sending notification to ${phoneNumber}, with message: ${message}`
  );
};

queue.process("push_notification_code", function (job, done) {
  sendNotification(job.data.phoneNumber, job.data.message);
  done();
});
