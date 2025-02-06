import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer'

interface SongUpload {
  audio: File;
  thumbnail?: File;
  metadata: {
    title: string;
    artist: string;
    duration?: string;
    releaseDate?: string;
    genre?: string;
    license?: string;
  }
}

export class IPFSService {
  private client;

  constructor() {
    this.client = create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https'
    });
  }

  async uploadSong(songData: SongUpload): Promise<string> {
    try {
      // Convert files to buffers
      const audioBuffer = await fileToBuffer(songData.audio);
      const thumbnailBuffer = songData.thumbnail ? await fileToBuffer(songData.thumbnail) : null;
      const metadataBuffer = Buffer.from(JSON.stringify(songData.metadata, null, 2));

      // Create files array for IPFS
      const files = [
        // Audio file
        {
          path: `${songData.metadata.artist}/${songData.metadata.title}/audio${getFileExtension(songData.audio.name)}`,
          content: audioBuffer
        },
        // Thumbnail if provided
        ...(thumbnailBuffer ? [{
          path: `${songData.metadata.artist}/${songData.metadata.title}/thumbnail${getFileExtension(songData.thumbnail!.name)}`,
          content: thumbnailBuffer
        }] : []),
        // Metadata JSON
        {
          path: `${songData.metadata.artist}/${songData.metadata.title}/metadata.json`,
          content: metadataBuffer
        }
      ];

      // Upload directory to IPFS
      const added = await this.client.add(files);
      return added.cid.toString();
    } catch (error) {
      console.error('Error uploading to IPFS:', error);
      throw error;
    }
  }

  getIPFSUrl(cid: string, filename: string): string {
    return `https://ipfs.io/ipfs/${cid}/${filename}`;
  }
}

// Helper function to convert File to Buffer
async function fileToBuffer(file: File): Promise<Buffer> {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

function getFileExtension(filename: string): string {
  return filename.substring(filename.lastIndexOf('.'));
} 