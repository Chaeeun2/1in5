import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import { db } from './config';

// 생년월일과 시간으로 기존 데이터 조회
export const getSajuByBirthInfo = async (birthYear, birthMonth, birthDay, birthHour) => {
  try {
    const q = query(
      collection(db, 'saju'),
      where('birthYear', '==', birthYear),
      where('birthMonth', '==', birthMonth),
      where('birthDay', '==', birthDay),
      where('birthHour', '==', birthHour || '')
    );
    
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    }
    return null;
  } catch (error) {
    console.error('기존 데이터 조회 중 오류 발생: ', error);
    throw error;
  }
};

// 사주 데이터 저장
export const saveSajuData = async (sajuData) => {
  try {
    const docRef = await addDoc(collection(db, 'saju'), sajuData);
    // console.log('문서가 작성되었습니다. ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('문서 추가 중 오류 발생: ', error);
    throw error;
  }
};

// 모든 사주 데이터 가져오기
export const getAllSajuData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'saju'));
    const sajuList = [];
    querySnapshot.forEach((doc) => {
      sajuList.push({ id: doc.id, ...doc.data() });
    });
    return sajuList;
  } catch (error) {
    console.error('데이터 가져오기 중 오류 발생: ', error);
    throw error;
  }
};

// 특정 사주 데이터 가져오기
export const getSajuById = async (id) => {
  try {
    const docRef = doc(db, 'saju', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      // console.log('해당 문서가 없습니다!');
      return null;
    }
  } catch (error) {
    console.error('문서 가져오기 중 오류 발생: ', error);
    throw error;
  }
};

// 사주 데이터 업데이트
export const updateSajuData = async (id, updateData) => {
  try {
    const docRef = doc(db, 'saju', id);
    await updateDoc(docRef, updateData);
    // console.log('문서가 업데이트되었습니다.');
  } catch (error) {
    console.error('문서 업데이트 중 오류 발생: ', error);
    throw error;
  }
};

// 사주 데이터 삭제
export const deleteSajuData = async (id) => {
  try {
    await deleteDoc(doc(db, 'saju', id));
    // console.log('문서가 삭제되었습니다.');
  } catch (error) {
    console.error('문서 삭제 중 오류 발생: ', error);
    throw error;
  }
}; 