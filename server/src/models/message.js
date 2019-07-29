import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});

messageSchema.statics.findBySlug = async function(slug) {
  let message = await this.findOne({
      slug,
    })
    .populate({
      path: 'user',
      select: 'username',
    });

  return message;
};

const Message = mongoose.model('Message', messageSchema);

export default Message;
