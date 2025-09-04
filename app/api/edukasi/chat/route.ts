import { NextRequest, NextResponse } from 'next/server';
import { extractLocation } from '@/lib/utils';

// Mock knowledge base untuk chatbot edukasi
const educationDatabase = {
  gempa: {
    keywords: ['gempa', 'earthquake', 'guncangan', 'getaran'],
    responses: [
      'Saat gempa terjadi, segera lakukan DROP (jatuhkan diri), COVER (lindungi kepala dengan tangan atau benda), dan HOLD ON (berpegangan). Jangan panik dan jangan berlari ke luar saat masih bergetar.',
      'Jika Anda berada di dalam bangunan saat gempa, cari perlindungan di bawah meja yang kuat. Hindari jendela, cermin, atau benda yang bisa jatuh. Setelah guncangan berhenti, keluar melalui tangga darurat.',
      'Untuk persiapan gempa, siapkan tas siaga berisi air minum, makanan tahan lama, obat-obatan, senter, radio, dan dokumen penting. Kenali jalur evakuasi dari rumah dan tempat kerja Anda.',
    ],
  },
  tsunami: {
    keywords: ['tsunami', 'gelombang besar', 'air laut naik'],
    responses: [
      'Jika merasakan gempa kuat atau melihat air laut surut mendadak, segera lari ke tempat tinggi minimal 30 meter dari permukaan laut. Jangan menunggu peringatan resmi.',
      'Saat evakuasi tsunami, bawa hanya barang-barang penting dan bergerak cepat ke tempat tinggi. Hindari pantai, muara sungai, dan daerah rendah. Gunakan kendaraan hanya jika tidak macet.',
      'Tanda-tanda alam tsunami: gempa kuat lebih dari 20 detik, air laut surut tiba-tiba menampakkan dasar laut, atau suara gemuruh dari arah laut.',
    ],
  },
  banjir: {
    keywords: ['banjir', 'flood', 'air naik', 'genangan'],
    responses: [
      'Saat banjir, naik ke tempat yang lebih tinggi dan matikan aliran listrik di rumah. Hindari berjalan di air yang mengalir deras, karena kedalaman 15 cm saja sudah bisa menjatuhkan orang dewasa.',
      'Persiapan menghadapi banjir: bersihkan saluran air secara rutin, siapkan pompa air portable, pindahkan barang berharga ke lantai atas, dan kenali jalur evakuasi terdekat.',
      'Jangan mengemudi melalui genangan air yang tingginya tidak diketahui. Air setinggi 30 cm dapat membuat mobil hilang kendali dan 60 cm dapat membuat mobil terbawa arus.',
    ],
  },
  kebakaran: {
    keywords: ['kebakaran', 'fire', 'api', 'terbakar', 'asap'],
    responses: [
      'Saat kebakaran, segera keluar dari bangunan dengan posisi merangkak jika asap tebal. Tutup pintu di belakang Anda untuk memperlambat penyebaran api. Gunakan tangga darurat, jangan lift.',
      'Untuk memadamkan api kecil, gunakan APAR dengan teknik PASS: Pull (tarik pin), Aim (arahkan ke dasar api), Squeeze (tekan handle), Sweep (sapukan dari sisi ke sisi).',
      'Jika pakaian terbakar, lakukan STOP (berhenti), DROP (jatuhkan diri), dan ROLL (berguling) untuk memadamkan api. Jangan berlari karena akan memperbesar api.',
    ],
  },
  longsor: {
    keywords: ['longsor', 'tanah longsor', 'landslide', 'tebing roboh'],
    responses: [
      'Tanda-tanda tanah longsor: retakan di tanah atau dinding, air keruh di mata air, bunyi gemuruh, atau pergerakan tanah yang tidak biasa. Segera evakuasi jika melihat tanda-tanda ini.',
      'Saat tanah longsor terjadi, lari ke samping menjauh dari jalur longsoran. Jangan lari ke atas atau ke bawah lereng. Cari tempat tinggi dan stabil untuk berlindung.',
      'Pencegahan longsor: jangan bangun rumah di lereng curam, tanam pohon untuk menahan tanah, buat saluran drainase yang baik, dan hindari penggalian yang melemahkan lereng.',
    ],
  },
  default: [
    'Terima kasih telah bertanya! Saya dapat membantu Anda dengan informasi tentang mitigasi bencana alam seperti gempa, tsunami, banjir, longsor, dan kebakaran. Silakan tanyakan hal spesifik yang ingin Anda ketahui.',
    'Untuk informasi kebencanaan yang lebih lengkap, Anda juga bisa mengakses menu Regulasi untuk mencari SOP dan prosedur resmi, atau gunakan form Laporan Bencana untuk melaporkan kejadian.',
    'Apakah ada jenis bencana tertentu yang ingin Anda pelajari cara mitigasinya? Saya siap membantu dengan informasi tentang persiapan, tindakan saat bencana, dan pemulihan pasca bencana.',
  ],
};

function generateResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Cek apakah pesan mengandung keyword tertentu
  for (const [category, data] of Object.entries(educationDatabase)) {
    if (category === 'default') continue;
    
    const hasKeyword = data.keywords.some(keyword => 
      lowerMessage.includes(keyword.toLowerCase())
    );
    
    if (hasKeyword) {
      const randomIndex = Math.floor(Math.random() * data.responses.length);
      return data.responses[randomIndex];
    }
  }
  
  // Response default jika tidak ada keyword yang cocok
  const randomIndex = Math.floor(Math.random() * educationDatabase.default.length);
  return educationDatabase.default[randomIndex];
}

function mockCoordinates(location: string): { lat: number; lng: number } | null {
  // Mock koordinat untuk beberapa lokasi umum Indonesia
  const locationCoords: Record<string, { lat: number; lng: number }> = {
    'jakarta': { lat: -6.2088, lng: 106.8456 },
    'bandung': { lat: -6.9175, lng: 107.6191 },
    'surabaya': { lat: -7.2575, lng: 112.7521 },
    'medan': { lat: 3.5952, lng: 98.6722 },
    'makassar': { lat: -5.1477, lng: 119.4327 },
    'bali': { lat: -8.3405, lng: 115.0920 },
    'yogyakarta': { lat: -7.7956, lng: 110.3695 },
    'semarang': { lat: -6.9667, lng: 110.4167 },
  };

  const normalizedLocation = location.toLowerCase().trim();
  
  for (const [key, coords] of Object.entries(locationCoords)) {
    if (normalizedLocation.includes(key)) {
      return coords;
    }
  }
  
  // Return random coordinates in Indonesia if no match found
  return {
    lat: -6.2 + (Math.random() - 0.5) * 10, // Random lat in Indonesia range
    lng: 106.8 + (Math.random() - 0.5) * 20, // Random lng in Indonesia range
  };
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Pesan tidak valid' },
        { status: 400 }
      );
    }

    // Generate response berdasarkan konten pesan
    const response = generateResponse(message);
    
    // Extract lokasi dari pesan menggunakan regex
    const detectedLocation = extractLocation(message);
    
    let coordinates = null;
    if (detectedLocation) {
      coordinates = mockCoordinates(detectedLocation);
    }

    // Simulate processing delay untuk realism
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    return NextResponse.json({
      response,
      detectedLocation,
      coordinates,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { 
        response: 'Maaf, terjadi kesalahan sistem. Silakan coba lagi atau hubungi kontak darurat jika ini adalah situasi mendesak.',
        error: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}