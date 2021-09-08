import mongoose, {
    Document,
    Model,
    Schema,
} from 'mongoose';

export interface IPageDocument extends Document {
    slug: string;
    title: string;
    text: string;
}

export interface IPageModel extends Model<IPageDocument> {}

const PageSchema = new Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    },

    title: {
        type: String,
        required: true,
    },

    text: String,
});

PageSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    },
});

const Page: IPageModel = mongoose.model<IPageDocument, IPageModel>('Page', PageSchema);

export default Page;
